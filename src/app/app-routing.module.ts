import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'welcome', component : WelcomeComponent},
  { path : 'applications', component : ApplicationsComponent},
  { path : 'signup', component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
