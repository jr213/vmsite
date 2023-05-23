import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ServicesComponent } from '../components/services/services.component';
import { PayOnlineComponent } from '../components/pay-online/pay-online.component';
import { RewardsComponent } from '../components/rewards/rewards.component';
import { ResourcesComponent } from '../components/resources/resources.component';
import { AboutComponent } from '../components/about/about.component';
import { CareersComponent } from '../components/careers/careers.component';
import { StoreLocatorComponent } from '../components/store-locator/store-locator.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../components/home/home.component';
import { FindLocationsComponent } from '../components/find-locations/find-locations.component';
import { LineCardComponent } from '../components/line-card/line-card.component';
import { StoreLunchComponent } from '../components/store-lunch/store-lunch.component';
import { EventsComponent } from '../components/events/events.component';
import { SpecialsComponent } from '../components/specials/specials.component';
import { TradeShowComponent } from '../components/trade-show/trade-show.component';
import { BusinessFormsComponent } from '../components/business-forms/business-forms.component';
import { ServiceRequestComponent } from '../components/service-request/service-request.component';
import { SalesContactComponent } from '../components/sales-contact/sales-contact.component';
import { AfterHoursComponent } from '../components/after-hours/after-hours.component';
import { VendorAppComponent } from '../components/vendor-app/vendor-app.component';
import { GenRegComponent } from '../components/gen-reg/gen-reg.component';
import { PressroomComponent } from '../components/pressroom/pressroom.component';
import { CreditAppComponent } from '../components/credit-app/credit-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ServicesComponent,
    PayOnlineComponent,
    RewardsComponent,
    ResourcesComponent,
    AboutComponent,
    CareersComponent,
    StoreLocatorComponent,
    ContactUsComponent,
    HomeComponent,
    FindLocationsComponent,
    LineCardComponent,
    StoreLunchComponent,
    EventsComponent,
    SpecialsComponent,
    TradeShowComponent,
    BusinessFormsComponent,
    ServiceRequestComponent,
    SalesContactComponent,
    AfterHoursComponent,
    VendorAppComponent,
    GenRegComponent,
    PressroomComponent,
    CreditAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
