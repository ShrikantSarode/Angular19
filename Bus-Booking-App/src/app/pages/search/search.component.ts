import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, AsyncPipe,RouterLink],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
btnClick() {
alert("Btn clicked")
}
  location$: Observable<any[]> = new Observable<any[]>();
  pickupId: string = '';
  destinationId: string = '';
  journeyDate: string = '';
  busList: any[] = [];

  masterSrv = inject(MasterService);

  searchObj: any = {
    fromLocation: '',   
    toLocation: '',      
    travelDate: '',      
  };

  ngOnInit(): void {
    this.getAllLocation();
  }

  getAllLocation() {
    this.location$ = this.masterSrv.getLocations();
  }

  onSearch() {
    const { fromLocation, toLocation, travelDate } = this.searchObj;
    if (!fromLocation || !toLocation || !travelDate) {
      console.error('Please fill in all fields.');
      return;
    }
    
   
    this.masterSrv
      .searchBuses(Number(fromLocation), Number(toLocation), travelDate)   
      .subscribe({
        next: (res: any) => {
          this.busList = res;
        },
        error: (err) => {
          console.error('Error fetching bus list:', err);
        },
      });
  }
}
