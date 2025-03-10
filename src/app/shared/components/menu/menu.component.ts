import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { MenuItem } from '@shared/models/menu.model';
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
    IonList,
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
