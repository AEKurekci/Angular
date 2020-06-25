import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router'
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  house;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse(){
    const id = +this.route.snapshot.paramMap.get('id')
    this.dataService.get_house(id).subscribe(house => this.house = house);
  }

}
