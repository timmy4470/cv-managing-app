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
  cv_details:  Observable<any>;
  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
  this.cv_details = this.contentful.getCv();
 console.log(this.contentful.getCv());
}

   
  

}
