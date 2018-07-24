import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImagesComponent } from './root/images/images.component';
import { ProfileComponent } from './root/profile/profile.component';
import { AppRoutingModule } from './router';
import { RootComponent } from './root/root.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AceEditorModule } from 'ng2-ace-editor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule,} from 'ngx-toastr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoursesComponent } from './root/course-category/courses/courses.component';
import { LandingPageComponent } from './root/landing-page/landing-page.component';
import { CourseDetailComponent } from './root/course-category/course-detail/course-detail.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CreateCourseComponent } from './root/create-course/create-course.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { LoadiingComponent } from './loadiing/loadiing.component';
import { CourseCategoryComponent } from './root/course-category/course-category.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ProfileComponent,
    RootComponent,
    CoursesComponent,
    LandingPageComponent,
    CourseDetailComponent,
    CreateCourseComponent,
    //LoadiingComponent,
    CourseCategoryComponent
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
      toastComponent: ToastNoAnimation,preventDuplicates: true,
    }),
    MalihuScrollbarModule.forRoot(),

  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
