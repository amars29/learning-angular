import { Component } from "@angular/core";
import {  ItemComponent } from "./item.component";

@Component({
    selector: 'app-items',
    template: `
        <div>
             @for(item of items; track item.id) {
    <p>{{ item.name }}</p>
    }

  
        </div>
    `,
    imports: [ItemComponent]
})
export class Items{
    items: ItemType[] = [
        {id: 0, name: 'Sarah'},
        {id: 1, name: 'Amy'},
        {id: 2, name: 'Rachel'},
        {id: 3, name: 'Jessica'},
        {id: 4, name: 'Poornima'},
      ];

      trackByItems(index: number, item: ItemTy): number { return item.id; }
}

//  <app-item *ngFor="let item of items; let i = index"/>
// <div *ngFor="let item of items; let i=index">{{i + 1}} - {{item.name}}</div>
