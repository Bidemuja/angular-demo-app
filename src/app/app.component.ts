import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template:
    `<app-navbar></app-navbar>
  <router-outlet></router-outlet>`,

})
export class AppComponent {
    handleDrop(event: DragEvent) {
      event.preventDefault();
      const files = event.dataTransfer?.files;
      if (files?.length) {
        // Envía el archivo al backend (puedes hacer esto con un IPC o algo similar en Electron)
        console.log('Archivo recibido:', files[0]);
      }
    }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }
}