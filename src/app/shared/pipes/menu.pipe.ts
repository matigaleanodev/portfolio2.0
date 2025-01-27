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

    const itemsCopy = [...menuItems];
    const homeItemIndex = itemsCopy.findIndex((item) => item.icono === 'home');

    if (
      homeItemIndex === -1 ||
      homeItemIndex === Math.floor(itemsCopy.length / 2)
    ) {
      return itemsCopy;
    }

    const homeItem = itemsCopy.splice(homeItemIndex, 1)[0];
    const middleIndex = Math.floor(itemsCopy.length / 2);
    itemsCopy.splice(middleIndex, 0, homeItem);

    return itemsCopy;
  }
}
