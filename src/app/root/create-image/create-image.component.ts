import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

import { SocketService } from '../../services/socket/socket.service';
import { HttpService } from '../../services/http/http.service';

declare var $: any;

@Component({
  selector : 'app-create-image',
  templateUrl : './create-image.component.html',
  styleUrls : [ './create-image.component.css' ]
})
export class CreateImageComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;
  label: string;
  toolname: string;
  toolversion: string;
  toolSearch = [];
  versionSearch = [];
  dockerfile;
  tools: any = {};
  logs: string[] = [];
  btnText: string = 'Build';
  options: any = {maxLines : 1000, printMargin: false}; // For ace editor
  availableTools: any = {
    node : {
      image : 'https://nodejs.org/static/images/logo-hexagon-card.png',
      versions: [ '4', '6', '8', '10' ],
      command() {
        return `curl -sL https://deb.nodesource.com/setup_${this.version}.x | bash && apt-get install -y nodejs`
      }
    },
    python: {
      image:
          'http://www.finalhints.com/wp-content/uploads/2016/01/opengraph-icon-200x200.png',
      versions: [ '2', '3' ],
      command() {
        if (this.version == 2)
          return 'apt-get install -y python && curl https://bootstrap.pypa.io/get-pip.py | python';
        else
          return 'apt-get install -y python3 && apt-get install -y python3-pip';
      }
    },
    mysql: {
      image:
          'http://www.stickpng.com/assets/images/5848104fcef1014c0b5e4950.png',
      versions: ['latest'],
      command() { return `apt-get install -y mysql-server` }
    }
  }

  baseImage: string = 'kide';

  text: string = ""; // For ace editor
  customPosition = {row : 0, column: 0};

  versionEnabled = false;
  addButtonEnabled = false;
  constructor(private router: Router, private http: HttpService,
	  private eleRef: ElementRef, public toastrService: ToastrService,
	  private socket: SocketService, public location: Location) {
  }

  ngOnInit() {
    let token = localStorage.getItem('jwt_token');
    this.socket.emit('kitcode', jwt_decode(token).id);
    this.socket.on('show').subscribe(data => { this.logs.push(data); });
    this.socket.on('result').subscribe((err) => {
      if (err){
        this.toastrService.error(err, 'Error', {positionClass : 'toast-bottom-right'});
        this.btnText = "Build failed";
      } else {
        this.toastrService.success('image creation success', 'Success', {positionClass : 'toast-bottom-right'});
        this.btnText = "Built";
      }
    });
  }

  ngAfterViewInit() {
    this.editor.getEditor().commands.addCommand({
      name : "showOtherCompletions",
      bindKey : "Ctrl-.",
      exec : function(editor) {}
    });
    this.editor.setOptions({fontFamily : "courier", fontSize : "10pt"});
  }

  createImage() {
    if (this.label && Object.keys(this.tools).length) {
      this.http
          .postData('Image', {"label" : this.label, "file" : this.editor.value})
          .subscribe((res) => {
            console.log(res);
            if (res.statusCode == 201) {
	      //$('#image-log').modal('show');
	      this.btnText = 'Building';
	    } else
              this.toastrService.error("Dockerfile not correct", 'Error',
                                       {positionClass : 'toast-bottom-right'});
          });
      this.logs = [];
    } else {
      this.toastrService.error('Name the image or try adding dependencies and try again', 'Error',
                               {positionClass : 'toast-bottom-right'});
    }
  }

  addTools(name, version): void {
    if (this.availableTools[name]) {
      if (this.availableTools[name].versions.includes(version)) {
        this.tools[name] = this.availableTools[name];
        this.tools[name].version = version;
        this.toolname = '';
        this.toolversion = '';
        this.versionEnabled = false;
        this.generateDockerFile();
      } else
        this.toastrService.error(`invalid ${name} version v${version}.`,
                                 'Error',
                                 {positionClass : 'toast-bottom-right'});
    } else
      this.toastrService.error(`we do not support ${name} yet.`, 'Error',
                               {positionClass : 'toast-bottom-right'});
  }

  removeTools(name): void{
    delete this.tools[name];
    this.generateDockerFile();
  }

  generateDockerFile() {
    this.dockerfile = 'FROM ' + this.baseImage + '\nRUN apt-get update\n';
    for (let key in this.tools) {
      this.dockerfile += 'RUN ' + this.tools[key].command() + '\n';
    }
    this.editor.value = this.dockerfile;
  }

  searchTool() {
    this.versionEnabled = false;
    this.addButtonEnabled = false;
    this.toolSearch = [];
    for (let key in this.availableTools) {
      if (key.includes(this.toolname) || this.toolname == undefined)
        this.toolSearch.push(key);
    }
  }

  searchVersion() {
    this.versionSearch = [];
    this.addButtonEnabled = false;
    this.availableTools[this.toolname].versions.forEach(version => {
      if (version.includes(this.toolversion) || this.toolversion == undefined)
        this.versionSearch.push(version);
    });
  }

  selectTool(name) {
    this.toolname = name;
    this.versionEnabled = true;
    this.toolSearch = [];
  }

  selectToolVersion(version) {
    this.toolversion = version;
    this.addButtonEnabled = true;
    this.versionSearch = [];
  }

}
