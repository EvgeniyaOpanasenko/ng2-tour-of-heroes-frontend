import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private service: HeroService) {
  }

  ngOnInit(): void {
    this.service.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

}