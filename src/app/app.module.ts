import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmailsService } from './services/emails.service';
import Vonage from '@vonage/server-sdk';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NoticesComponent } from './components/notices/notices.component';
import { LoginComponent } from './components/login/login.component';
import { SearchPipe } from './pipes/search.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TextcolorchangeDirective } from './directives/textcolorchange.directive';
import { ChurchesComponent } from './components/churches/churches.component';
import { RegisterComponent } from './templates/register/register.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { HomepageComponent } from './components/admin/homepage/homepage.component';
import { NewComponent } from './components/new/new.component';
import { EventsComponent } from './components/events/events.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { SortPipe } from './pipes/sort.pipe';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FrontnavbarComponent } from './components/frontnavbar/frontnavbar.component';

import { FrontpageClubsComponent } from './frontpage/frontpage-clubs/frontpage-clubs.component';
import { FrontpageEventsComponent } from './frontpage/frontpage-events/frontpage-events.component';
import { FrontpageChurchesComponent } from './frontpage/frontpage-churches/frontpage-churches.component';

;








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    NoticesComponent,
    LoginComponent,
    SearchPipe,
    HighlightDirective,
    TextcolorchangeDirective,
    ChurchesComponent,
    RegisterComponent,
    SubscriptionsComponent,
    HomepageComponent,
    NewComponent,

    EventsComponent,
      ClubsComponent,
      SortPipe,
      FrontpageComponent,
      FrontnavbarComponent,
      FrontpageClubsComponent,
      FrontpageEventsComponent,
      FrontpageChurchesComponent,
  
    
   
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ),
    
  ],
  providers: [EmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
