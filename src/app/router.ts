import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ImagesComponent } from './views/images/images.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AppComponent } from './app.component';
import { RootComponent } from './views/root.component';
import { ModuleWithProviders } from "@angular/core";


const routes: Routes = [
    { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' ,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'app', component: RootComponent, canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'image', component: ImagesComponent},
            { path: 'profile', component: ProfileComponent}
        ]
    }
];


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
