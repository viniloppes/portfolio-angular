import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MENU_ITEMS } from '../menu';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar-menu',
  imports: [MenubarModule, TooltipModule, DockModule, ButtonModule, InputTextModule, AvatarModule, BadgeModule, CommonModule, RippleModule, RouterModule],
  templateUrl: './topbar-menu.html',
  styleUrl: './topbar-menu.css',
})
export class TopbarMenu implements OnInit {
  items: MenuItem[] | undefined;
  isDark: boolean = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.items = MENU_ITEMS;
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector('html');
      this.isDark = element?.classList.contains('my-app-dark') ?? false;
    }
  }

  toggleDarkMode() {
    // if (isPlatformBrowser(this.platformId)) {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.isDark = element?.classList.contains('my-app-dark') ?? false;
    // }
  }
}