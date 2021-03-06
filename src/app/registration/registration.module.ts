import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouterModule } from "@angular/router";
import { routes } from "./registration.routes";
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { RegisterInterviewerComponent } from './pages/register-interviewer/register-interviewer.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPageComponent, RegisterAdminComponent, RegisterInterviewerComponent, LoginComponent]
})
export class RegistrationModule { }
