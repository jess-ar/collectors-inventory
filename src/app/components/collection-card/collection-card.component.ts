import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 bg-white rounded-lg shadow-md">
      <img [src]="imageUrl" [alt]="altText" class="w-full h-auto rounded-lg">
    </div>
  `,
})
export class CollectionCardComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
}