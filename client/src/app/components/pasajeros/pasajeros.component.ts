import { Component, OnInit } from '@angular/core';
import {PasajeroI} from '../../models/pasajero.interface';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.css']
})
export class PasajerosComponent implements OnInit {
  datos:[PasajeroI];

  dataSource;


  displayedColumns: string[] = ['nombre', 'cedula', 'fecha_nacimiento','genero','telefono','direccion','id_boleto','actions'];
  



  cargarDatos(){
    this.api.getAllPasajeros().subscribe((data)=>
      {
        console.log(data.data);
        this.datos= data.data;
        this.dataSource = new MatTableDataSource(this.datos);
        console.log(this.dataSource);
        console.log(this.datos);
      });
  }

  constructor( private api:BoletoService,private routes:Router) { 
    const token = localStorage.getItem('token');
    if(!token)
      this.routes.navigate(['login']);
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editarterminal(cedula){
    console.log(cedula);
  }

}
