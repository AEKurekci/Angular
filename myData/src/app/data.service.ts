import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_users(){
    return this.http.get('assets/json_data/wikipedia_history_suspects_I_world_war.json');
  }
}
