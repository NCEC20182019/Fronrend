import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../IEvent';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit {

  private currentEvent: IEvent;

  @Output() public sendRoute = new EventEmitter();

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sendRoute.emit(this.route);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getCurrentEvent(parseInt(params.get('id')));
      });
  }

  getCurrentEvent(_id){
    this.data.getEvents().subscribe(
      (events: IEvent[]) => {
        this.currentEvent = events.filter(x=> x.id === _id)[0];
      }
    )
  }
 
}
