import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

Injectable({
  providedIn: 'root'
});

export class ItemService {

  list: string[] = [];

  loadItemList(): Observable<string[]> {
    return of(this.list);
  }

  addItem(todo: string): any {
    this.list.push(todo);
    return of(null);
  }

  deleteItem(todo: string): any {
    console.log(todo);
    console.log(this.list);
    console.log(todo);
    console.log(this.list.indexOf(todo));
    if (this.list.length > 0 && this.list.indexOf(todo) !== -1) {
      console.log('wchodzi');

      this.list.splice(this.list.indexOf(todo), 1);
    }
    // this.list.splice(this.list.indexOf(todo), 1);

    return of(null);
  }
}
