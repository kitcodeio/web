import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './services/auth/auth.guard';
import { RBACService } from './services/rbac/rbac.service';

import { DashboardComponent } from './root/dashboard/dashboard.component';
import { RootComponent } from './root/root.component';
import { ModuleWithProviders } from "@angular/core";
import { CourseCategoryComponent } from './root/course-category/course-category.component';
import { UserProfileComponent } from './root/user-profile/user-profile.component'
import { CategoriesComponent } from './root/categories/categories.component';
import { CreateSectionComponent } from './root/dashboard/create-section/create-section.component';
import { ContainersComponent } from './root/dashboard/containers/containers.component';
import { TutorialComponent } from './root/dashboard/tutorial/tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'root/course/detail/1', pathMatch: 'full'},
    { path: 'login', loadChildren:'src/app/login/login.module#LoginModule' },	
    { path: 'create-image', loadChildren: './root/create-image/create-image.module#CreateImageModule' },
    { path: 'root', component: RootComponent, children: [
        { path: 'category', loadChildren: './root/landing-page/landing-page.module#LandingPageModule' },
        { path: 'course', component: CourseCategoryComponent, children: [
            { path: 'detail/:id', loadChildren:'./root/course-category/courses/courses.module#CoursesModule' },
            { path: 'chapter/:id', loadChildren: './root/course-category/course-detail/course-detail.module#CourseDetailModule'}
        ]},
        { path: 'kide/:course/:section/:chapter', loadChildren: './root/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
        { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard, RBACService],children:[
            { path: 'sub-domain', loadChildren: './root/sub-domain/sub-domain.module#SubDomainModule' },
            { path: 'list-image', loadChildren:'src/app/root/images/images.module#ImagesModule'},
            { path: 'createCourse/:id', loadChildren: './root/dashboard/create-course/create-course.module#CreateCourseModule' },
            { path: 'category', component: CategoriesComponent },
            { path: 'createSection/:id', component: CreateSectionComponent },
            { path: 'container', component: ContainersComponent },
	    { path: 'tutorial', component: TutorialComponent }
	] },
        { path: 'user/:id', component: UserProfileComponent },
        { path: 'verification_complete', loadChildren: 'src/app/verification/verification.module#VerificationModule'},
        { path: 'run', loadChildren: './root/kide/kide.module#KideModule'}
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
