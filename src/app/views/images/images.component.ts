import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpService } from '../../services/http/http.service'
import * as $ from 'jquery';
import * as popover from '../../../assets/js/popper.min.js';
import * as CodeMirror from '../../../assets/js/codemirror.js';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Conditional, Version } from '@angular/compiler';
import '../../../../node_modules/jquery/dist/jquery.min.js'
import { version } from 'codemirror';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { RouterModule, Routes, } from '@angular/router';
import { Router } from '@angular/router';

declare var CodeMirror: any;
declare var popover: any;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit, AfterViewInit {

  
  options:any = {maxLines: 1000, printMargin: false}; //For ace editor
  docker = 
  {  
  'stringOs':'FROM ubuntu:latest\nRUN rm /bin/sh && ln -s /bin/bash /bin/sh\nRUN apt-get update\&& apt-get install -y curl\&& apt-get -y autoclean\n',

  'Node': '',
  
  'Angular': '',
  
  'Jupyter': '\nRUN pip3 install --upgrade pip\nRUN pip3 install numpy pandas sklearn matplotlib seaborn jupyter pyyaml h5py\nRUN pip3 install keras --no-deps\nRUN ["mkdir", "notebooks"]\nCOPY jupyter_notebook_config.py /root/.jupyter/\nCOPY run_jupyter.sh /\nEXPOSE 8888 6006\nVOLUME /notebooks\nCMD ["/run_jupyter.sh"]\n',

  'Tensorflow':'RUN pip3 install tensorflow',

  'Python':'',
  }
  allVersion = {
    'Angular':[2,3,5,6],
    'Node':[4,6,8],
    'Python':[2,3]
  };

  versionArray=[];
  version:any;
  selectedVersion=[];
  imageId: number;
  @ViewChild('linux') linux: ElementRef;
  @ViewChild('select') tool: ElementRef;
  @ViewChild('lools') tools: ElementRef;
  @ViewChild('node') node;
  @ViewChild('editor') editor;
  @ViewChild('version') En_version: ElementRef;
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  text:string = ""; //For ace editor
  customPosition = {
    row: 0,
    column: 0
  };

  allTools=[];
  stringOfAllImages=[];
  label:string;

  constructor(private router:Router, private http: HttpService, private eleRef: ElementRef, public toastrService: ToastrService) {}


  ngOnInit() {

    //Notifucations
    this.toastrService.overlayContainer = this.toastContainer;

    $(function(){

     // $('[data-toggle="popover"]').popover();

      var popoverImage = "<ul class='list-inline'> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='f' checked='checked'><label class='activatedImage image-template-select mb-0' for='f'><img style='width:30px;height:30px;' src='../../../../assets/images/1.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='a'><label class='image-template-select mb-0' for='a'><img style='width:30px;height:30px;' src='../../../../assets/images/2.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='b'><label class='image-template-select mb-0' for='b'><img style='width:30px;height:30px;' src='../../../../assets/images/3.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='c'><label class='image-template-select mb-0' for='c'><img style='width:30px;height:30px;' src='../../../../assets/images/4.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='d'><label class='image-template-select mb-0' for='d'><img style='width:30px;height:30px;' src='../../../../assets/images/5.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='e'><label class='image-template-select mb-0' for='e'><img style='width:30px;height:30px;' src='../../../../assets/images/1.gif'></label></li> </ul>";
  
  
      var popoverLogo = "<ul class='list-inline'> <li class='list-inline-item'><i class='px-2 py-1' style='color:#3399cc;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#6033cc;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#cc3396;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#cc3333;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#ccb933;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#43cc33;'>logo 1</i></li> </ul>";
  
  
  
      // $('.popOverImage').popover({
      //   container:'body',
      //   content:popoverImage,
      //   html:true
      // });

      // $(document).on('change','.preview-check-container',function(){
      //   if($('#previewCheck')[0].checked){
      //     $('.previewImageBlock').slideDown();
      //   }
      //   else{
      //     $('.previewImageBlock').slideUp();
      //   }
      // });
  
  
      // $(":file").change(function () {
      //     if (this.files && this.files[0]) {
      //         var reader = new FileReader();
      //         reader.onload = imageIsLoaded;
      //         reader.readAsDataURL(this.files[0]);
      //     }
      // });
  
      function imageIsLoaded(e) {
          $('#myImg').attr('src', e.target.result);
          $('.previewLogo').attr('src',e.target.result);
      }
  
      // $(document).on('click','.image-template-select',function(){
      //     $('.image-template-select').removeClass('activatedImage');
      //     $(this).addClass('activatedImage');
  
      //     if($(this).hasClass('activatedImage')){
      //       $('.popOverImage').children()[0].src=$(this).children()[0].src;
      //       $('.previewImage')[0].src=$(this).children()[0].src;
      //     }
      // });
    });
  
    $(function(){
  
      $(".sidebar-icons").click(function(){
        // remove classes from all
        $(".sidebar-icons").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
     }); 
  
  
      // $(document).on('click','.add-component-button',function(){
      //     $('.component-list').append("<li class='component-list-item list-group-item d-flex justify-content-between align-items-center'> <span #tools>Windows<br/>7</span> <span class='remove-list-component'> <i class='fa fa-times-circle-o' aria-hidden='true'></i></span> </li>");
      //     if($('.component-list-container').height()>150){
      //         $('.component-list-container').height(200);
      //     }
      // }); 
  
      $(document).on('click','.remove-list-component',function(){
        if($('.component-list-item').length<3){
            $('.component-list-container').css('height','100%'); 
        }
        $(this).parent().remove();
      }); 
    });
  }

// Ace code Editor
  ngAfterViewInit() {

    this.editor.setTheme("eclipse");

    this.editor.getEditor().setOptions({
        enableBasicAutocompletion: true
    });

    this.editor.getEditor().commands.addCommand({
        name: "showOtherCompletions",
        bindKey: "Ctrl-.",
        exec: function (editor) {

        }
    });

    this.editor.setOptions({
      fontFamily: "courier",
      fontSize: "10pt"
    });
}


//Create image
  createImage() {
    if(this.label && this.tool.nativeElement.value){
      console.log(this.label);
      this.http.postData('Image',{
        "label":this.label,
        "file":this.editor.value
      }).subscribe((res) => {
        if(res.status==201)
        {
          this.toastrService.success('Image creation started','Success',{positionClass:'toast-bottom-right'});
          this.router.navigate(['app/dashboard']);
        }
        else{
          this.toastrService.error(res.erroe,'Error',{positionClass:'toast-bottom-right'});
        }
      })
    }
    else{
      this.toastrService.error('Please select all the fields','Error',{positionClass:'toast-bottom-right'});
    }
  }

  createDockerfile() {

    let finalString = '';
    
    this.allTools.forEach(tool=>{

      finalString = finalString + this.docker[tool.sTool];
   });

   this.editor.value =  this.docker.stringOs + finalString;


  }

  
  addTools(){

    let flag:boolean=true;

    this.version = this.En_version.nativeElement.value;
    if(this.tool.nativeElement.value==""){
      this.toastrService.warning('Please select component','Warning',{positionClass:'toast-bottom-right'});     
    }
    else{
      this.allTools.forEach(tool=>{

        if(tool.sTool == this.tool.nativeElement.value){
          this.toastrService.warning(this.tool.nativeElement.value + ' is already selected','Warning',{positionClass:'toast-bottom-right'});
          flag = false;
        }
      })

      if(flag){

        if(this.tool.nativeElement.value=='Node'){
          this.docker.Node = '\nENV NVM_DIR /usr/local/nvm\nENV NODE_VERSION ' + this.En_version.nativeElement.value + '.0.0\nRUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash\nRUN source $NVM_DIR/nvm.sh\&& nvm install $NODE_VERSION\&& nvm alias default $NODE_VERSION\&& nvm use default\nENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules\nENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH';
        } 
        else if(this.tool.nativeElement.value=='Angular' && this.En_version.nativeElement.value!=""){
          this.docker.Angular = '\nRUN npm install -g @angular/cli@' + this.En_version.nativeElement.value + '.0.0\n'; 
        }
        else if(this.tool.nativeElement.valsue=='Python'){
          this.docker.Python = 'RUN apt-get update && \ \napt-get install -y python' + this.En_version.nativeElement.value + '.0 python-dev python-pip python-virtualenv && \ \nrm -rf /var/lib/apt/lists/*\n'
        }

        this.allTools.push({sTool: this.tool.nativeElement.value, sVersion:this.En_version.nativeElement.value});
        console.log('version',this.version)

        }
    }
  }

  removeTools(index){

    this.allTools.splice(index,1);

    let finalString = '';
    let alterAllTools=[]

    alterAllTools= this.allTools;
    
    alterAllTools.forEach(tool=>{

        finalString = finalString + this.docker[tool.sTool];

   });

   this.editor.value =  this.docker.stringOs + finalString;

   this.docker.Node = '';
   this.docker.Angular = '';
   this.docker.Python = '';

  }

  uniqueV(){

    if(this.tool.nativeElement.value=='Node'){
      this.versionArray=this.allVersion.Node;
    } 
    else if(this.tool.nativeElement.value=='Angular'){
      this.versionArray=this.allVersion.Angular;
    }
    else if(this.tool.nativeElement.value=='Python'){
      this.versionArray=this.allVersion.Python;
    }   
    else if(this.tool.nativeElement.value=='Jupyter'){
      this.versionArray=[];
    }    
    else if(this.tool.nativeElement.value=='Tensorflow'){
      this.versionArray=[];
    }
  }

}
