import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImagesComponent } from './views/images/images.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './router';
import { RootComponent } from './views/root.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AceEditorModule } from 'ng2-ace-editor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule,} from 'ngx-toastr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD
=======
import { YoutubePlayerModule } from 'ngx-youtube-player';
//import { EmbedVideo } from 'ngx-embed-video';
>>>>>>> 03b73dc999fdf09a7240f11c18cb0653f80f02a2


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AceEditorModule,
    SimpleNotificationsModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
<<<<<<< HEAD
    })
=======
    }),
    YoutubePlayerModule,
	  //EmbedVideo.forRoot()
>>>>>>> 03b73dc999fdf09a7240f11c18cb0653f80f02a2
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
