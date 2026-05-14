
import { Component, inject, signal } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Project, projects } from './projects';

interface Product {
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK',
  rating: 5
}
@Component({
  selector: 'app-projects-page',
  imports: [DataView, ButtonModule, Tag, CommonModule, CardModule],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

  products = signal<any>([]);
  projects: Project[] = [];


  ngOnInit() {
    // this.projects.set([...projects])
    this.projects = projects;
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warn';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
  openUrl(url: string) {
    console.log(url);

    window.open(url, '_blank');
  }
}

