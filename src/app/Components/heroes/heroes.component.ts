import { Component, OnInit } from '@angular/core';
import {heroesService, Heroe} from 'src/app/Services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[]=[];
  constructor(private _servicioHeroes: heroesService) { }

  ngOnInit() {
    this.heroes = this._servicioHeroes.getHeroes();
    console.log(this.heroes);
  }

}