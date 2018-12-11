import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {

    }

    getBookings(id: number, pageNumber: number, pageSize: number, searchText: string){
        return this.http.get('http://localhost:55317/api/salesUnits/'+id+'/bookings/'+pageNumber+'/'+pageSize+'/'+ searchText + '');
    }

    getSalesUnits(fromDate: string, toDate: string) {
        var body : any = {}
        body.fromDate = fromDate;
        body.toDate = toDate;
        return this.http.post("http://localhost:55317/api/salesUnits", body);
    }
}