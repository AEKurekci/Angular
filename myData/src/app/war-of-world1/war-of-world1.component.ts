import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-war-of-world1',
  templateUrl: './war-of-world1.component.html',
  styleUrls: ['./war-of-world1.component.scss']
})
export class WarOfWorld1Component implements OnInit {

  user_data : any;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.user_data = this.data_service.get_users();
  }

}
