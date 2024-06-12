import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';

import { LoginComponent } from './components/login/login.component';
import { ChurchesComponent } from './components/churches/churches.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { HomepageComponent } from './components/admin/homepage/homepage.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FrontpageChurchesComponent } from './frontpage/frontpage-churches/frontpage-churches.component';
import { FrontpageClubsComponent } from './frontpage/frontpage-clubs/frontpage-clubs.component';
import { FrontpageEventsComponent } from './frontpage/frontpage-events/frontpage-events.component';




const routes: Routes = [
   {
     path: 'login',
     component: LoginComponent
   },
   {
    path:'frontpagechurches',
    component: FrontpageChurchesComponent  
  },
  {
    path:'frontpageclubs',
    component: FrontpageClubsComponent  
  },
  {
    path:'frontpageevents',
    component: FrontpageEventsComponent  
  },
   {
    path:'',
    component:FrontpageComponent
   },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'churches',
    component: ChurchesComponent
  },
  {
path:'subscribe',
component: SubscriptionsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
  path:'clubs',
  component: ClubsComponent
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
