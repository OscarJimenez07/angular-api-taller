import { Component , OnInit} from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})


export class PublicacionesComponent implements OnInit {
  data: any[] = []; // Arreglo para almacenar los datos obtenidos del servicio

  constructor(private apiService: ApiService) {}

  // Método del ciclo de vida OnInit, se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.setData(); 
  }
  // Método personalizado para obtener y asignar datos desde el servicio
  setData() {
    // Llama al método getData del servicio ApiService para obtener los datos
    this.apiService.getData().subscribe( data => {
      this.data = data; // Asigna los datos obtenidos al arreglo 'data'
    });
  }


}
