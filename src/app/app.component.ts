import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from './contentful.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  

  title = 'resume-managing-app';
  ngOnInit() {


  }

}
