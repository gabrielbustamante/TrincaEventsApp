import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { EventModel } from '../models/event-model';

@Injectable()
export class EventData {

  constructor(public http: Http) {
    console.log('Hello EventData Provider');
  }

    lastId: number = 0;

  events: EventModel[] = [
    {date: new Date, description: '24/11/2017', id: 1, title: 'Overclock', img: 'https://ionicframework.com/dist/preview-app/www/assets/img/card-saopaolo.png'},
    {date: new Date, description: '24/11/2017', id: 2, title: 'Sessions', img: 'https://ionicframework.com/dist/preview-app/www/assets/img/card-amsterdam.png'},
    {date: new Date, description: '24/11/2017', id: 3, title: 'Churras', img: 'https://ionicframework.com/dist/preview-app/www/assets/img/card-sf.png'},
    {date: new Date, description: '24/11/2017', id: 4, title: 'Futebol', img: 'https://ionicframework.com/dist/preview-app/www/assets/img/card-madison.png'}
  ];

    // Simulate GET /trincaEvent
  getAllMock(): EventModel[] {
    return this.events;
  }

    // Simulate POST /ttrincaEventodos
  add(event: EventModel): EventData {
    if (!event.id) {
      event.id = ++this.lastId;
    }

    this.events.push(event);
    return this;
  }

  getAll(){
    return this.http.get("").subscribe(data => {
      return data;
    });
  }
}
