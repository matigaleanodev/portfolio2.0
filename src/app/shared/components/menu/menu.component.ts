import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { MenuItem } from '@shared/models/menu.model';
import { addIcons } from 'ionicons';
import { clipboardOutline, home, laptopOutline, mail } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [IonIcon, IonLabel, IonItem, IonList, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      titulo: 'Home',
      link: '/home',
      icono: 'home',
    },
    {
      titulo: 'Skills',
      link: '/skills',
      icono: 'laptop-outline',
    },
    {
      titulo: 'Projectos',
      link: '/projects',
      icono: 'clipboard-outline',
    },
    {
      titulo: 'Contacto',
      link: '/contact',
      icono: 'mail',
    },
  ];

  constructor() {
    addIcons({
      home,
      laptopOutline,
      clipboardOutline,
      mail,
    });
  }
}
