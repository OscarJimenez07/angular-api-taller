import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.apiService.getData().subscribe( data => {
      this.data = data;
    })
  }


}
