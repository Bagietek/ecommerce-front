import { Component, Inject, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { Item } from '../entities/item';
import { WarehouseService } from '../services/warehouse.service';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  template:`
    <h1>Shoppers</h1>
    <section class="itemList">
      <app-item
        *ngFor="let item of itemList"
        [item]="item"
        ></app-item>
    </section>
  `,
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  itemList: Item[] = [];
  warehouseService: WarehouseService = inject(WarehouseService);

  constructor(){
    this.warehouseService.getAllItems().then((itemList: Item[]) => {
      this.itemList = itemList;
    });
  }
}
