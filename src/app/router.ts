import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { DashboardComponent } from './root/dashboard/dashboard.component';
import { ImagesComponent } from './root/images/images.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './root/profile/profile.component';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ModuleWithProviders } from "@angular/core";
import { CoursesComponent } from './root/course-category/courses/courses.component';
import { LandingPageComponent } from './root/landing-page/landing-page.component';
import { CreateCourseComponent } from './root/create-course/create-course.component';
import { CourseDetailComponent } from './root/course-category/course-detail/course-detail.component';
import { CourseCategoryComponent } from './root/course-category/course-category.component';

const routes: Routes = [
    { path: '', redirectTo: 'root/category', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'root', component: RootComponent, children: [
        { path: 'category', component: LandingPageComponent },
        { path: 'course', component: CourseCategoryComponent, children: [
            { path: 'detail/:id', component:  CoursesComponent },
            { path: 'chapter/:id', component: CourseDetailComponent}
        ]},
        { path: 'kide/:course/:section/:chapter', component: ProfileComponent, canActivate: [AuthGuard] },
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'image', component: ImagesComponent, canActivate: [AuthGuard] },
        { path: 'createCourse', component: CreateCourseComponent, canActivate: [AuthGuard] },
    ]}];


@NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }
