import { Component } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {
  galleryImages: string[] = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    // Agrega aquí las rutas de tus imágenes
  ];

}
