import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { DataService } from '../data.service'

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {

  user_data: any;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.user_data = this.data_service.get_users();
  }

}
