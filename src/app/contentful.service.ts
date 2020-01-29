import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful';
import { environment } from '../environments/environment'
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken:environment.contentful.token
  })
  
  constructor() { }
  getContent(contentId): Observable<any> {
    const promise = this.client.getEntry(contentId);
    return from(promise)
      .pipe(
        map(entry => entry.fields)
      );
  }
  logContent(contentId) {
    this.client.getEntry(contentId)
    .then((entry) => console.log(entry))
  }
    // console logs a response for debugging
  getHomeText(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'home'
    }, query))
      .then(res => res.items);
  }
  getLoginText(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'loginPageText'
    }, query))
      .then(res => res.items);
  }
  getCv(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'cv'
    }, query))
      .then(res => res.items);
  }
  getOfferForm(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'offerSubmit'
    }, query))
      .then(res => res.items);
  }

}
