import { Routes } from '@angular/router';
import { HomesPage } from '@pages/home.page';
import { StarWarsPage } from '@pages/star-wars.page';
import { LegoPage } from '@pages/lego.page';
import { MarvelPage } from '@pages/marvel.page';
import { PezPage } from '@pages/pez.page';
import { JuegosPage } from '@pages/juegos.page';
import { FunkosPage } from '@pages/funkos.page';
import { ClasicosPage } from '@pages/clasicos.page';
import { VariosPage } from '@pages/varios.page';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomesPage },
  { path: 'home', component: HomesPage },
  { path: 'star-wars', component: StarWarsPage },
  { path: 'lego', component: LegoPage },
  { path: 'marvel', component: MarvelPage },
  { path: 'pez', component: PezPage },
  { path: 'juegos', component: JuegosPage },
  { path: 'funkos', component: FunkosPage },
  { path: 'clasicos', component: ClasicosPage },
  { path: 'varios', component: VariosPage },
  { path: '**', redirectTo: 'home' }
];
