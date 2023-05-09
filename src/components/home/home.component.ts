import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  brands: any[] = [
    { name: 'Grundfos', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Grundfos-Logo-min.png' },
    { name: 'Ruud', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Rudd-Logo-min.png' },
    { name: 'Bradford White', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Bradford-White-Logo-1-min.png' },
    { name: 'Uponor', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/uponor-logo-min.png' },
    { name: 'Navien', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Navien-Logo-min.png' },
    { name: 'Mcdonald', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/McDonald-Logo-min.png' },
    { name: 'American Standard', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/American-Standard-Logo-min.png' },
    { name: 'Moen', url: 'https://vanmarckeplumbingsupply.com/wp-content/uploads/2022/06/Moen-Logo-min.png' },
  ];
}
