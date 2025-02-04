import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { defineCustomElement as defineToast } from '@ionic/core/components/ion-toast';
import { ToastOption } from '@shared/models/toastr.model';

import { addIcons } from 'ionicons';
import {
  alertCircleOutline,
  checkmarkCircleOutline,
  informationCircleOutline,
  warningOutline,
} from 'ionicons/icons';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private toastController = inject(ToastController);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    addIcons({
      alertCircleOutline,
      checkmarkCircleOutline,
      warningOutline,
      informationCircleOutline,
    });
    defineToast();
  }

  async error(message: string): Promise<void> {
    const header = 'Error';
    const icon = 'alert-circle-outline';
    const color = 'danger';
    await this.presentToast({ message, color, header, icon });
  }

  async success(message: string): Promise<void> {
    const header = 'SmartIoT';
    const icon = 'checkmark-circle-outline';
    const color = 'success';
    await this.presentToast({ message, color, header, icon });
  }

  async warning(message: string): Promise<void> {
    const header = 'SmartIoT';
    const icon = 'warning-outline';
    const color = 'warning';
    await this.presentToast({ message, color, header, icon });
  }

  async info(message: string): Promise<void> {
    const header = 'SmartIoT';
    const icon = 'information-circle-outline';
    const color = 'medium';
    await this.presentToast({ message, color, header, icon });
  }

  async presentToast({
    message,
    color,
    header,
    icon,
  }: ToastOption): Promise<void> {
    const headers = Array.from(document.querySelectorAll('ion-header')).filter(
      (header) => {
        const rect = header.getBoundingClientRect();
        return rect.height > 0 && rect.width > 0 && rect.bottom > 0;
      }
    );

    if (headers.length > 0) {
      const lastHeader = headers[headers.length - 1];

      const toast = await this.toastController.create({
        header,
        icon,
        message,
        color,
        duration: 2500,
        position: 'top',
        positionAnchor: lastHeader,
        cssClass: 'toastr-border',
      });

      await toast.present();
    } else {
      const toast = await this.toastController.create({
        header,
        icon,
        message,
        color,
        duration: 2500,
        position: 'top',
        cssClass: 'toastr-border',
      });

      await toast.present();
    }
  }
}
