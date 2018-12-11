import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesUnitListComponent } from './sales-unit-list/sales-unit-list.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  { path: '', redirectTo: 'salesUnits', pathMatch: 'full' },
  { path: 'salesUnits', component: SalesUnitListComponent },
  { path: 'bookings/:id', component: BookingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
