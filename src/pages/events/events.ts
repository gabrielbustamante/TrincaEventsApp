import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventModel } from '../../models/event-model';
import { EventData } from '../../providers/event-data';
/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class Events {

  newEvent: EventModel = new EventModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventDataService: EventData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  add() {
    this.eventDataService.add(this.newEvent);
    this.newEvent = new EventModel();
  }

  get events() {
    return this.eventDataService.getAllMock();
  }
}
