import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '@shared/models/menu.model';

@Pipe({
  name: 'menu',
  standalone: true,
})
export class MenuPipe implements PipeTransform {
  transform(menuItems: MenuItem[]): MenuItem[] {
    if (!menuItems || menuItems.length <= 1) {
      return menuItems;
    }

    const homeItemIndex = menuItems.findIndex((item) => item.icono === 'home');

    if (
      homeItemIndex === -1 ||
      homeItemIndex === Math.floor(menuItems.length / 2)
    ) {
      return menuItems;
    }

    const homeItem = menuItems.splice(homeItemIndex, 1)[0];

    const middleIndex = Math.floor(menuItems.length / 2);
    menuItems.splice(middleIndex, 0, homeItem);

    return menuItems;
  }
}
