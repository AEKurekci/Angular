import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { DataService } from '../data.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$: Object;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getPhotos().subscribe(
      data => this.photos$ = data
    )
  }

}
