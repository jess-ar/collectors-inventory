import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // 👈 Asegura que NgFor está importado

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  template: `
    <h1 class="text-4xl font-bold text-primary">Mi colección</h1>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      <img *ngFor="let item of collectionItems" [src]="item.imageUrl" [alt]="item.altText" 
        class="rounded-lg shadow-md w-full h-64 object-cover">
    </div>
  `,
})
export class HomesPage {
  collectionItems = [
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290765/Star-Wars-Jedi-Survivor-Vintage-Collection-Figura-Jetpack-Trooper-10-cm-1-600x600_ki5yim.jpg', altText: 'Figura 1' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290766/0ef32ba41130c40d9dd94b1b495baae0_kx8uhl.jpg', altText: 'Figura 2' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290768/eefb9719a1ab60d1be3b8cafa623d4e7_qqexh7.jpg', altText: 'Figura 3' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290769/fc4eba2c66777a5d6a11a817b52aa6a3_cl2wss.jpg', altText: 'Figura 4' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290767/aa61f2d626f0bc5b755b5e4209d2271c_l4luvr.jpg', altText: 'Figura 5' }
  ];
}