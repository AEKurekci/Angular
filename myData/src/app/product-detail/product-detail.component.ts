import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { cars } from '../cars';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.get_car(id).subscribe(car => this.product = car);
  }

  goBack() {
    this.location.back();
  }

}
