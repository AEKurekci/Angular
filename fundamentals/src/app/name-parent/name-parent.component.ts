import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.scss']
})
export class NameParentComponent implements OnInit {

  master = "Kürekci";
  names = [' Ali', '  ', ' Emre   '];

  constructor() { }

  ngOnInit(): void {
  }

}
