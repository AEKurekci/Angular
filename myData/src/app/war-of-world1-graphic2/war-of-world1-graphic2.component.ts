import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-war-of-world1-graphic2',
  templateUrl: './war-of-world1-graphic2.component.html',
  styleUrls: ['./war-of-world1-graphic2.component.scss']
})
export class WarOfWorld1Graphic2Component implements OnInit {

  pie_address: any;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.pie_address = this.data_service.get_pie_pict();
  }

}
