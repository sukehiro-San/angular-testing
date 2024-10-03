import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducer';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cartCount: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
