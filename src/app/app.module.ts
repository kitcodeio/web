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
import { DashboardComponent } from './root/dashboard/dashboard.component';
import { CategoriesComponent } from './root/categories/categories.component';
import { CreateSectionComponent } from './root/dashboard/create-section/create-section.component';
import { DragulaModule } from 'ng2-dragula';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { ContainersComponent } from './root/dashboard/containers/containers.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("35446698823-r8cah6sm4mjd9hjua0mkttstgtpf88tf.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("248217116002964")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    CourseCategoryComponent,
    UserProfileComponent,
    DashboardComponent,
    CategoriesComponent,
    CreateSectionComponent,
    ContainersComponent,
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
    SocialLoginModule,
    DragulaModule.forRoot(),
    DragulaModule,
    DragDropDirectiveModule,

  ],
  providers: [AuthserviceService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
