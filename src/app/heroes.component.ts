import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  /* title = 'angular-tour-of-heroes';*/
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) {
  }

  getHeroes() {
    this.service.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


/*export class AppComponent implements OnInit {
 title = 'Tour of Heroes';
 heroes: Hero[];
 selectedHero: Hero;

 constructor(private heroService: HeroService) { }

 getHeroes(): void {
 this.heroService.getHeroes().then(heroes => this.heroes = heroes);
 }

 ngOnInit(): void {
 this.getHeroes();
 }

 onSelect(hero: Hero): void {
 this.selectedHero = hero;
 }
 }*/
