import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { ItemService } from './store/item.service';
import { ItemListComponent } from './item-list/item-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/item.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    AddItemComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ItemEffects
    ]),
    StoreDevtoolsModule.instrument(),
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
