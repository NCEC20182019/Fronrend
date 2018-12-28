import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '../components/IEvent';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private _eventsUri = "/assets/events.json";
  private _eventsUri = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this._eventsUri);
  }
}
