import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from './body/carrusel/carrusel.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './body/tabla/tabla.component';
import { MenuComponent } from './body/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CarruselComponent,HttpClientModule,CommonModule,TablaComponent,MenuComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen';
}
