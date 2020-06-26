import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('houseTrigger', [
      transition(':enter', [style({ opacity: 0 }), animate('3s', style({ opacity: 1 }))
      ])]),
    trigger('carTrigger', [
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('1s', style({ transform: 'translateX(0)' }))])
    ])
  ]
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
