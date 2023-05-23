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
  {path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
