import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {

  user_data = users;

  constructor() { }

  ngOnInit(): void {
  }

  get_user_data(){
    return this.user_data;
  }

}
