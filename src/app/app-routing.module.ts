import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { CareersComponent } from '../components/careers/careers.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { HomeComponent } from '../components/home/home.component';
import { PayOnlineComponent } from '../components/pay-online/pay-online.component';
import { ResourcesComponent } from '../components/resources/resources.component';
import { RewardsComponent } from '../components/rewards/rewards.component';
import { ServicesComponent } from '../components/services/services.component';
import { StoreLocatorComponent } from '../components/store-locator/store-locator.component';
import { FindLocationsComponent } from '../components/find-locations/find-locations.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { LineCardComponent } from 'src/components/line-card/line-card.component';
import { AfterHoursComponent } from '../components/after-hours/after-hours.component';
import { BusinessFormsComponent } from '../components/business-forms/business-forms.component';
import { EventsComponent } from '../components/events/events.component';
import { SalesContactComponent } from '../components/sales-contact/sales-contact.component';
import { SpecialsComponent } from '../components/specials/specials.component';
import { ServiceRequestComponent } from '../components/service-request/service-request.component';
import { StoreLunchComponent } from '../components/store-lunch/store-lunch.component';
import { TradeShowComponent } from '../components/trade-show/trade-show.component';
import { GenRegComponent } from '../components/gen-reg/gen-reg.component';
import { VendorAppComponent } from '../components/vendor-app/vendor-app.component';
import { CreditAppComponent } from '../components/credit-app/credit-app.component';
import { PressroomComponent } from '../components/pressroom/pressroom.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'pay-online', component: PayOnlineComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'line-card', component: LineCardComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'store-locator', component: StoreLocatorComponent},
  {path: 'find-locations', component: FindLocationsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'after-hours', component: AfterHoursComponent},
  {path: 'business-forms', component: BusinessFormsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sales-contact', component: SalesContactComponent},
  {path: 'specials', component: SpecialsComponent},
  {path: 'service-request', component: ServiceRequestComponent},
  {path: 'store-lunch', component: StoreLunchComponent},
  {path: 'trade-show', component: TradeShowComponent},
  {path: 'gen-reg', component: GenRegComponent},
  {path: 'vendor-app', component: VendorAppComponent},
  {path: 'credit-app', component: CreditAppComponent},
  {path: 'pressroom', component: PressroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
