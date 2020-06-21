import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { cars } from './cars';
import { houses } from './houses';

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

  get_cars(){
    return this.car_list;
  }
}
