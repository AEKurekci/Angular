import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { cars } from './cars';
import { houses } from './houses';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { House } from './house';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  car_list = cars;
  house_list = houses;

  constructor(private http: HttpClient) { }

  get_users(){
    return this.http.get('assets/json_data/wikipedia_history_suspects_I_world_war.json');
  }

  get_bar_pict(){
    return 'assets/graphics/wikipedia_history_suspects_I_world_war_count_plot.png';
  }

  get_pie_pict(){
    return 'assets/graphics/wikipedia_history_suspects_I_world_war_pie_plot.png';
  }

  get_houses(){
    return this.house_list;
  }

  get_house(id: number): Observable<House>{
    return of(this.house_list.find(house => house.id === id));
  }
  
  get_cars(){
    return this.car_list;
  }

  get_car(id: number): Observable<Car>{
    return of(this.car_list.find( car => car.id === id));
  }
}
