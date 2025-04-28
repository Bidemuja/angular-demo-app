import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  link: string = '';
  
  constructor() {
    // Asegurarse de que window.electron está disponible
    if (window.electron) {
      console.log('Electron disponible');
    } else {
      console.warn('Electron no está disponible en este contexto');
    }
  }

  buscarLinks() {
    const linksEncontrados = "Hay 5 links";
    this.link = linksEncontrados;
  }
  
  // Función para manejar archivos arrastrados
  /*handleDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];  // Accediendo al archivo
    if (file) {
      const fileName = file.name;  // Solo el nombre del archivo
      console.log('Archivo arrastrado:', fileName);
      window.electron.sendFileDropped(fileName);  // Enviar solo el nombre
    }
  }*/
    handleDrop(event: DragEvent) {
      event.preventDefault();
      const file = event.dataTransfer?.files[0];  // Accediendo al archivo
      if (file) {
        const fileName = file.name;  // Solo el nombre del archivo
        console.log('Archivo arrastrado:', fileName);
        window.electron.sendFileDropped(fileName);  // Enviar solo el nombre
      }
    }
  

  // Función para habilitar el área de arrastre
  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
