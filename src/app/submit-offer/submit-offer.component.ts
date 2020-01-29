import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-submit-offer',
  templateUrl: './submit-offer.component.html',
  styleUrls: ['./submit-offer.component.css']
})
export class SubmitOfferComponent implements OnInit {
  offer:  Observable<any>;
  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.offer = this.contentful.getContent('2Q8cAB7YTFozBiO0FeW65y');
    
  }

}
