import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-button',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  template: `
    <a [routerLink]="route" class="category">
      {{ label }}
    </a>
  `,
})
export class CategoryButtonComponent {
  @Input() label: string = '';
  @Input() route: string = '';
}