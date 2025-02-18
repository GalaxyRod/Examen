import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  image: any[] = [];
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://images-api.nasa.gov/search?q=galaxy&media_type=image')
      .subscribe(
        (response) => {
          this.image = response.collection.items.slice(0, 10);
          console.log('Datos obtenidos:', this.image);
          
          for (let i = 0; i < this.image.length; i++) {
            this.data.push({
              id: i,
              image: this.image[i].links[0].href,
              title: this.image[i].data[0].title,
              description: this.image[i].data[0].description,
              nasa_id: this.image[i].data[0].nasa_id,
            });
            console.log('Datos obtenidos:', this.data);
          }
        },
        (error) => {
          console.error('Error al obtener los datos:', error);
        }
      );
}
}