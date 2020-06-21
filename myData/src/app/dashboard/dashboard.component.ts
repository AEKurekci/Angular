import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cars;
  houses;

  constructor(private service: DataService) { 
  }

  ngOnInit(): void {
    this.cars = this.service.get_cars();
    this.houses = this.service.get_houses();
  }

}
