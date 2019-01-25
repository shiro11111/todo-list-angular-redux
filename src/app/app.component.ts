import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-angular';
  list: Todo[];

  ngOnInit(): void {
    this.list = [];
  }

  onItemAdded(item: Todo): void {
    this.list.push(item);
  }

  onItemRemoved(index: number): void {
    this.list.splice(index, 1);
  }
}
