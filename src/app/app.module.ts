import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
// Servicios
import {heroesService} from './Services/heroes.service';

// Componentes
import {HeaderComponent} from './Components/header/header.component';
import {BodyComponent} from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeroesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [heroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
