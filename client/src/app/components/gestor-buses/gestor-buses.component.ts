import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';
import {GestorBusI} from '../../models/gestorBus.interface'

import {Router} from '@angular/router';

@Component({
  selector: 'app-gestor-buses',
  templateUrl: './gestor-buses.component.html',
  styleUrls: ['./gestor-buses.component.css']
})
export class GestorBusesComponent implements OnInit {

  datos:[GestorBusI];

  dataSource;

  displayedColumns: string[] = ['id', 'tipo_bus','nombre_bus','fecha','modelo', 'color','capacidad','id_terminal', 'actions'];

  cargarDatos(){
    this.api.getAllGestorBus().subscribe((data)=>
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
  editarGestorBus(id){
    this.routes.navigate(['sistema/gestor-buses/editargestor-buses/',id])
  }
  nuevoGestorBus(){
    this.routes.navigate(['sistema/gestor-busess/nuevogestor-buses/'])
  }
  eliminar(){
    this.api.deleteterminal(this.datos).subscribe(data =>{
      console.log(data);
    })
  }

}


