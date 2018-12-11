import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesUnitListComponent } from './sales-unit-list/sales-unit-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule} from "@angular/material";
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SalesUnitListComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [ApiService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
