import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { StarWarsComponent } from '@pages/star-wars/star-wars.component';
import { LegoComponent } from '@pages/lego/lego.component';
import { MarvelComponent } from '@pages/marvel/marvel.component';
import { PezComponent } from '@pages/pez/pez.component';
import { JuegosComponent } from '@pages/juegos/juegos.component';
import { FunkosComponent } from '@pages/funkos/funkos.component';
import { ClasicosComponent } from '@pages/clasicos/clasicos.component';
import { VariosComponent } from '@pages/varios/varios.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'star-wars', component: StarWarsComponent },
  { path: 'lego', component: LegoComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'pez', component: PezComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'funkos', component: FunkosComponent },
  { path: 'clasicos', component: ClasicosComponent },
  { path: 'varios', component: VariosComponent },
  { path: '**', redirectTo: 'home' }
];