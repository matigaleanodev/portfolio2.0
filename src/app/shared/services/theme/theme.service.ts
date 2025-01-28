import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

export type CurrentTheme = 'light' | 'dark' | 'default';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal<CurrentTheme>('default');
  isDefaultTheme = signal<boolean>(true);

  readonly colorScheme: MediaQueryList;
  private storage = inject(StorageService);

  constructor() {
    this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  }

  async initTheme() {
    const storedTheme = (await this.storage.get(
      'theme'
    )) as CurrentTheme | null;

    if (storedTheme && storedTheme !== 'default') {
      this.isDefaultTheme.set(false);
      this.updateTheme(storedTheme);
    } else {
      this.isDefaultTheme.set(true);
      this.updateTheme(this.colorScheme.matches ? 'dark' : 'light');
      this.colorScheme.addEventListener('change', this.onDeviceThemeChange);
    }

    if (storedTheme && storedTheme !== 'default') {
      this.isDefaultTheme.set(false);
      this.updateTheme(storedTheme);
    } else {
      this.isDefaultTheme.set(true);
      this.updateTheme(this.colorScheme.matches ? 'dark' : 'light');
      this.colorScheme.addEventListener('change', this.onDeviceThemeChange);
    }
  }

  updateTheme(theme: CurrentTheme): void {
    this.currentTheme.set(theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('ion-palette-dark');
    } else {
      document.documentElement.classList.remove('ion-palette-dark');
    }
  }

  private onDeviceThemeChange = (event: MediaQueryListEvent): void => {
    if (this.isDefaultTheme()) {
      this.updateTheme(event.matches ? 'dark' : 'light');
    }
  };

  setDarkTheme(): void {
    this.isDefaultTheme.set(false);
    this.storage.set('theme', 'dark');
    this.colorScheme.removeEventListener('change', this.onDeviceThemeChange);
    this.updateTheme('dark');
  }

  setLightTheme(): void {
    this.isDefaultTheme.set(false);
    this.storage.set('theme', 'light');
    this.colorScheme.removeEventListener('change', this.onDeviceThemeChange);
    this.updateTheme('light');
  }

  useDeviceTheme(): void {
    this.isDefaultTheme.set(true);
    this.storage.set('theme', 'default');
    this.updateTheme(this.colorScheme.matches ? 'dark' : 'light');
    this.colorScheme.addEventListener('change', this.onDeviceThemeChange);
  }
}
