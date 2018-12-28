import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from '../IEvent';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
  
  public Events: IEvent[] = [];

  @Output() public sendRoute = new EventEmitter();

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sendRoute.emit(this.route);

    this.getEvents();
  }

  getEvents(){
    this.data.getEvents().subscribe(
      (events: IEvent[]) => {
        this.Events = events;
      }
    )
  }

  redirect(_id){
    this.router.navigate([_id], { relativeTo: this.route })
  }

}
