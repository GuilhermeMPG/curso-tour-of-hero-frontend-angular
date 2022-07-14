import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Batman',
  };
  heroes = HEROES;
  selectedHero?: Hero;
  selectOn(hero: Hero): void {
    this.selectedHero = hero;
  }
}
