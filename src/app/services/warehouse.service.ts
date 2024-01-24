import { Injectable } from '@angular/core';
import { Item } from '../entities/item';
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  url = 'http://localhost:8080/guest/items';
  
  async getAllItems(): Promise<Item[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}


/*protected itemList: Item[] =
  [{
    id: 1,
    technicalId: "eeee",
    name: "Egg",
    category: ["Food"],
    availability: "available",
    description: "Fresh egg",
  },
  {
    id: 2,
    technicalId: "cccc",
    name: "Carrot",
    category: ["Food"],
    availability: "available",
    description: "Fresh carrot",
  }];

  getAllItems(): Item[]{
    return this.itemList;
  }

  getItemById(id: number): Item | undefined{
    return this.itemList.find((item) => item.id === id)
  }*/