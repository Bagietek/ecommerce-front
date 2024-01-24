import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { Item } from '../entities/item';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template:`
    <section class="listing">
      <h2 class="listing-heading">{{ item.name }}</h2>
    </section>
  `,
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: Item;
}
