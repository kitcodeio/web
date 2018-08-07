import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './services/auth/auth.guard';
import { RBACService } from './services/rbac/rbac.service';

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
import { UserProfileComponent } from './root/user-profile/user-profile.component'
import { SubDomainComponent } from './sub-domain/sub-domain.component';

const routes: Routes = [
    { path: '', redirectTo: 'root/category', pathMatch: 'full'},
    { path: 'login', loadChildren:'src/app/login/login.module#LoginModule' },
    { path: 'root', component: RootComponent, children: [
        { path: 'category', loadChildren: './root/landing-page/landing-page.module#LandingPageModule' },
        { path: 'course', component: CourseCategoryComponent, children: [
            { path: 'detail/:id', loadChildren:'./root/course-category/courses/courses.module#CoursesModule' },
            { path: 'chapter/:id', loadChildren: './root/course-category/course-detail/course-detail.module#CourseDetailModule'}
        ]},
        { path: 'kide/:course/:section/:chapter', loadChildren: './root/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
        { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard, RBACService],children:[
            { path: 'create-image', loadChildren: './root/create-image/create-image.module#CreateImageModule' },
            { path: 'createCourse', loadChildren: './root/create-course/create-course.module#CreateCourseModule' },
            { path: 'sub-domain', component: SubDomainComponent },
            { path: 'list-image', loadChildren:'src/app/root/images/images.module#ImagesModule'},
        ] },     
        
        { path: 'user/:id', component: UserProfileComponent }
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
