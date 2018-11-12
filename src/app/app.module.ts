import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomerService} from './shared/customer.service';
import {environment} from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
