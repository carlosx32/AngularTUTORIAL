import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { heroesService } from 'src/app/Services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  // tslint:disable-next-line: variable-name
  constructor(private activateRoute: ActivatedRoute, private _heroesService: heroesService) {
    this.activateRoute.params.subscribe(params =>{
        this.heroe = this._heroesService.getHeroe(params.id);
      }
    );
    console.log(this.heroe);
   }

  ngOnInit() {
  }

}
