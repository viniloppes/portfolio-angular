import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MENU_ITEMS } from '../menu';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-topbar-menu',
  imports: [MenubarModule, TooltipModule, DockModule, InputTextModule, AvatarModule, BadgeModule, CommonModule, RippleModule],
  templateUrl: './topbar-menu.html',
  styleUrl: './topbar-menu.css',
})
export class TopbarMenu implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = MENU_ITEMS;
  }
}