import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../todo';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { AddItem, DeleteItem } from '../store/item.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() addItem = new EventEmitter<Todo>();
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void {
    this.store.dispatch(new AddItem(this.form.get('item').value));
    // this.addItem.emit({ name: this.form.get('item').value });
    this.form.get('item').setValue(null);
  }

  createForm(): void {
    this.form = this.fb.group({
      item: null
    });
  }
}
