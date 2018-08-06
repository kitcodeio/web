import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router';
import { RootComponent } from './root/root.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule,} from 'ngx-toastr';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CourseCategoryComponent } from './root/course-category/course-category.component';
import { UserProfileComponent } from './root/user-profile/user-profile.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    CourseCategoryComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SimpleNotificationsModule.forRoot(),
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,preventDuplicates: true,
    }),
    MalihuScrollbarModule.forRoot(),
    FacebookModule.forRoot(),

  ],
  providers: [AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
