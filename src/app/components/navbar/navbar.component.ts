import { Component } from '@angular/core'; 
import { MenuItems } from './MenuItems';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems : MenuItem[] = MenuItems;
}
 