import { Component, OnInit } from '@angular/core';
import { HERO } from '../hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {

  heroes = HERO;
  master = "Emre";

  constructor() { }

  ngOnInit(): void {
  }

}
