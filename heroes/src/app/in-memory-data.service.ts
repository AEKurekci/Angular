import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hz Muhammed' },
      { id: 12, name: 'Ebu Bekir' },
      { id: 13, name: 'Ömer' },
      { id: 14, name: 'Ali' },
      { id: 15, name: 'Osman' },
      { id: 16, name: 'Fatih Sultan' },
      { id: 17, name: 'Yavus Selim' },
      { id: 18, name: 'Mustafa Kemal' },
      { id: 19, name: 'Mevlana' },
      { id: 20, name: 'Yunus Emre' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
