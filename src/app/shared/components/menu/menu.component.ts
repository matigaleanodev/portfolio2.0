import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  clipboardOutline,
  home,
  laptopOutline,
  mail,
  person,
} from 'ionicons/icons';
import { MenuItems } from './menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonItem,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  readonly menuItems = MenuItems;

  constructor() {
    addIcons({
      home,
      person,
      laptopOutline,
      clipboardOutline,
      mail,
    });
  }
}
