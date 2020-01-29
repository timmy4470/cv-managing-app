import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import {Admin} from '../admin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  cv_details:  Observable<any>;
  constructor(private contentful: ContentfulService) {}
  ngOnInit() {
   
    this.cv_details = this.contentful.getCv();
  }
  onSubmit(cv_form: NgForm) {
    console.log(cv_form.value);
    const full_name = cv_form.value.full_name;
    const address = cv_form.value.address;
    const email = cv_form.value.email;
    const thesis = cv_form.value.thesis;
    const education = cv_form.value.education;
    const job = cv_form.value.job;
    const exprience = cv_form.value.experience;



  }

}
