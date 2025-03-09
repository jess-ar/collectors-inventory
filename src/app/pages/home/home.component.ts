import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  scrollInterval: any;

  collectionItems = [
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290765/Star-Wars-Jedi-Survivor-Vintage-Collection-Figura-Jetpack-Trooper-10-cm-1-600x600_ki5yim.jpg', altText: 'Figura 1' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290766/0ef32ba41130c40d9dd94b1b495baae0_kx8uhl.jpg', altText: 'Figura 2' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290768/eefb9719a1ab60d1be3b8cafa623d4e7_qqexh7.jpg', altText: 'Figura 3' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290769/fc4eba2c66777a5d6a11a817b52aa6a3_cl2wss.jpg', altText: 'Figura 4' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290767/aa61f2d626f0bc5b755b5e4209d2271c_l4luvr.jpg', altText: 'Figura 5' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290765/Star-Wars-Jedi-Survivor-Vintage-Collection-Figura-Jetpack-Trooper-10-cm-1-600x600_ki5yim.jpg', altText: 'Figura 6' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290766/0ef32ba41130c40d9dd94b1b495baae0_kx8uhl.jpg', altText: 'Figura 7' },
    { imageUrl: 'https://res.cloudinary.com/dt052lsti/image/upload/v1741290768/eefb9719a1ab60d1be3b8cafa623d4e7_qqexh7.jpg', altText: 'Figura 8' },
  ];

  infiniteCollection: any[] = [];

  ngOnInit() {
    this.duplicateImages();
  }

  ngAfterViewInit() {
    this.startScroll();
  }

  duplicateImages() {
    this.infiniteCollection = [...this.collectionItems, ...this.collectionItems];
  }

  startScroll() {
    this.scrollInterval = setInterval(() => {
      if (this.scrollContainer) {
        const scrollContainer = this.scrollContainer.nativeElement;
        scrollContainer.scrollLeft += 4; 

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 50);
  }

  stopScroll() {
    clearInterval(this.scrollInterval);
  }

  onScroll(event: any) {
    const scrollValue = event.target.value;
    const maxScroll = this.scrollContainer.nativeElement.scrollWidth / 2 - this.scrollContainer.nativeElement.clientWidth;
    this.scrollContainer.nativeElement.scrollLeft = (scrollValue / 100) * maxScroll;
  }
}