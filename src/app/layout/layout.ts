import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarMenu } from './topbar-menu/topbar-menu';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopbarMenu],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout { }
