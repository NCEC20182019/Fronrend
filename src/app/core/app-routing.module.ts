import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { EventlistComponent } from '../components/eventlist/eventlist.component';
import { EventViewComponent } from '../components/event-view/event-view.component'
import { MapComponent } from '../components/map/map.component';
import { CalendarComponent } from '../components/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events'
  },
  {
    path: 'events',
    component: EventlistComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  },
  {
    path: 'events/:id',
    component: EventViewComponent,
    children: [
      { path: '', redirectTo: 'map', pathMatch: 'full' },
      { path: 'map', component: MapComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
