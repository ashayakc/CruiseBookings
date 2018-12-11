import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

export interface SalesUnit {
  id: number,
  name: string,
  price: string
}

@Component({
  selector: 'app-sales-unit-list',
  templateUrl: './sales-unit-list.component.html',
  styleUrls: ['./sales-unit-list.component.css']
})
export class SalesUnitListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price'];
  result : SalesUnit[];

  profileForm = new FormGroup({
    picker1: new FormControl(''),
    picker2: new FormControl('')
  });

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {    
    this.apiService.getSalesUnits("01-01-2016","01-03-2016").subscribe((res : SalesUnit[]) => {
      this.result = res;
    })
  }

  onRowSelected(item: SalesUnit){
    console.log(item);
  }

  onSubmit(data){
    this.apiService.getSalesUnits(this.getDate(data.value.picker1),this.getDate(data.value.picker2)).subscribe((res : SalesUnit[]) => {
      this.result = res;
    })
  }

  getDate(date){
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    var hour = date.getHours();     // yields hours 
var minute = date.getMinutes(); // yields minutes
var second = date.getSeconds();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + "-" + mm + "-" + yyyy; 
  }
}
