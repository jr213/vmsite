import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  brands: any[] = [
    { name: 'Grundfos', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Grundfos-Logo-min.png', website: 'https://www.grundfos.com/' },
    { name: 'Ruud', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Rudd-Logo-min.png', website: 'https://www.ruud.com/' },
    { name: 'Bradford White', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Bradford-White-Logo-1-min.png', website: 'https://www.bradfordwhite.com/' },
    { name: 'Uponor', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/uponor-logo-min.png', website: 'https://www.uponor-usa.com/' },
    { name: 'Navien', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Navien-Logo-min.png', website: 'https://www.navieninc.com/' },
    { name: 'Mcdonald', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/McDonald-Logo-min.png',  website: 'https://www.mcdonaldwaterstorage.com/' },
    { name: 'American Standard', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/American-Standard-Logo-min.png', website: 'https://www.americanstandard-us.com/' },
    { name: 'Moen', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Moen-Logo-min.png', website: 'https://www.moen.com/' },
  ];
}
