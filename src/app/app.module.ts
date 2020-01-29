import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitOfferComponent } from './submit-offer/submit-offer.component';
import { ContentfulService } from './contentful.service';
import { ShowcvComponent } from './showcv/showcv.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SubmitOfferComponent,
    ShowcvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
