import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';
import {BoletoI} from '../../models/boleto.interface';


import {Router} from '@angular/router';
@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent implements OnInit {
  datos:[BoletoI];

  dataSource;

  displayedColumns: string[] = ['id','nombre','apellido','bioseguridad','precio','origen','destino','hrs_salida','fecha_salida','ubicacion','nro_asiento','tipo_bus','nombre_bus','placa'];

  cargarDatos(){
    this.api.getAllBoletos().subscribe((data)=>
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

}

