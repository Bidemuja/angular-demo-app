import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  link: string = ''; // Propiedad que se mostrará en pantalla

  buscarLinks() {
    const linksEncontrados = "Hay 5 links"; // Aquí pones tu lógica real si quieres
    this.link = linksEncontrados; // Actualizas la propiedad
  }
}
