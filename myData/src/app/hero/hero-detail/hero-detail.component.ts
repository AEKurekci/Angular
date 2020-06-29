import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { HeroService } from '../hero.service';
import { Hero } from '../../myheroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.hero = this.service.getHero(id);
    console.log(this.hero);

  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null

    this.router.navigate(['/heroes/heroes-list', { id: heroId, foo: 'foo' }]);
  }

}
