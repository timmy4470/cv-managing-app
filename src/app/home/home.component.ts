import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home:  Observable<any>;
  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.home = this.contentful.getContent('4Z8WqEu7tWrcLivH4EolK9');

  }

}
