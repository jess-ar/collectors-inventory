import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  constructor() {}

  uploadImage(image: File): void {
    console.log('Subiendo imagen a Cloudinary...', image);
  }
}