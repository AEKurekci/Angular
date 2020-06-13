import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-war-of-world1-graphic',
  templateUrl: './war-of-world1-graphic.component.html',
  styleUrls: ['./war-of-world1-graphic.component.scss']
})
export class WarOfWorld1GraphicComponent implements OnInit {

  bar_address: any;

  constructor(private data_service: DataService) { }

  ngOnInit(): void {
    this.bar_address = this.data_service.get_bar_pict();
    console.log(this.bar_address);
    
  }

}
