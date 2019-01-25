import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {Todo} from '../todo';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @ViewChild('info') info: TemplateRef<any>;

  @Input() item: Todo;
  @Output() removeTodo = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {
  }

  onDelete(): void {
    this.dialog.open(this.info);
  }

  onDeleteApproved(item: string): void {
    this.removeTodo.emit(item);
    this.dialog.closeAll();
  }
}
