
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent} from './Components/heroes/heroes.component';
import { BodyComponent } from './Components/body/body.component';
import { HeroeComponent } from './Components/heroe/heroe.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroes/heroe/:id', component: HeroeComponent},
  {path:  '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash : true});
