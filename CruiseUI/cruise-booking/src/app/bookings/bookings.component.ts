import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

export interface BookingDetail {
  bookingId : number,
  shipName : string,
  price : string
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  dataSource : BookingDetail[] = [];
  displayedColumns: string[] = ['bookingId', 'shipName', 'price'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  source = new MatTableDataSource<any>();

  searchForm = new FormGroup({
    searchText : new FormControl('')
  });

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });

    this.loadBookings(this.id, "");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadBookings(id, searchText){
    this.apiService.getBookings(id, 0, 1000, searchText).subscribe((list : any) => {
      let array = list.map(item => {
        return item;
      });
      this.source = new MatTableDataSource(array);
      this.source.paginator = this.paginator;
    });
    
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(data){
    this.loadBookings(this.id, data.value.searchText);
  }
}
