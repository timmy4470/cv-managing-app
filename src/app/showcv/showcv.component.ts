import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-showcv',
  templateUrl: './showcv.component.html',
  styleUrls: ['./showcv.component.css']
})
export class ShowcvComponent implements OnInit {
  cv_details:  Entry<any>[] = [];
  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
  this.contentful.getCv().then(cv_details => this.cv_details = cv_details);
 console.log(this.contentful.getCv());
}

   
  

}
