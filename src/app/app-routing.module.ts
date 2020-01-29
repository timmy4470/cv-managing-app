import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SubmitOfferComponent } from './submit-offer/submit-offer.component';
import { ShowcvComponent } from './showcv/showcv.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'submit-offer',  component: SubmitOfferComponent },
  { path: 'show-cv',  component: ShowcvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
