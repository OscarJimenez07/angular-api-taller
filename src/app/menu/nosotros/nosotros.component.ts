import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  mostrarImagen() {
    // URL de la imagen que deseas mostrar
    const imageUrl = 'https://economipedia.com/wp-content/uploads/Empresa-2.jpg'; // URL de la imagen en Internet

    // Abrir la imagen en una nueva ventana
    window.open(imageUrl, '_blank');
  }

}

