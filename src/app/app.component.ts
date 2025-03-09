import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollectionCardComponent } from '@components/collection-card/collection-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CollectionCardComponent, NavbarComponent], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'collectors-inventory';
}