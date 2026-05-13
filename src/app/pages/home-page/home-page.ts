
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';
import { ToastModule } from 'primeng/toast';
import { ContextMenu } from 'primeng/contextmenu';
import { Tag } from 'primeng/tag';
import { MenuItem, MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
interface Users {
  id: number;
  name: string;
  image: string;
  role: string;
  href: string;
}


@Component({
  selector: 'app-home-page',
  imports: [ScrollerModule, ToastModule, CommonModule, Tag, DividerModule, ScrollPanelModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  providers: [MessageService]
})
export class HomePage implements OnInit {
  items: MenuItem[] | undefined;

  selectedId = 0;
  @ViewChild('cm')
  cm!: ContextMenu;

  selectedUser!: Users;

  users: Users[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.users = [
      { id: 0, name: 'SPA Beauty Clinic', image: '', role: 'Admin', href: 'https://ednalopesestetica.com.br/inicio' },
      { id: 1, name: 'SPA Beauty Clinic - Mothers Day', image: '', role: 'Admin', href: 'https://ednalopesestetica.com.br/diadasmaes' },
      { id: 2, name: 'Flash Cards App', image: '', role: 'Admin', href: 'https://viniloppes.github.io/FlashcardsApp/decks' },
      { id: 3, name: 'Fruit Ninja', image: '', role: 'Admin', href: 'https://viniloppes.github.io/unity-fruit-ninja-web-build/' },
      { id: 4, name: 'SPA Beauty Clinic - Post Partum', image: '', role: 'Admin', href: 'https://viniloppes.github.io/SPA_EDNA_LOPES_AB_SEM_DIASTASE/' },
    ];

    this.items = [
      {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Admin',
            command: () => {
              this.selectedUser.role = 'Admin';
            }
          },
          {
            label: 'Member',
            command: () => {
              this.selectedUser.role = 'Member';
            }
          },
          {
            label: 'Guest',
            command: () => {
              this.selectedUser.role = 'Guest';
            }
          }
        ]
      },
      {
        label: 'Invite',
        icon: 'pi pi-user-plus',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
        }
      }
    ];
  }

  getBadge(user) {
    if (user.role === 'Member') return 'info';
    else if (user.role === 'Guest') return 'warn';
    else return null;
  }

  onContextMenu(event, user) {
    this.selectedUser = user;
    this.cm.show(event);
  }

  onHide() {
    this.selectedUser = null;
  }


}
