import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:  Observable<any>;
  constructor(private contentful: ContentfulService) {}
 
  ngOnInit() {
    this.login = this.contentful.getContent('7qno0b7EFaPxb09Hgjj2HH');
    console.log(this.contentful.getLoginText());
  }

}
