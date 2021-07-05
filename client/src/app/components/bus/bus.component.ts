import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';
import { BusI } from 'src/app/models/bus.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  datos:[BusI];

  dataSource;

  displayedColumns: string[] = ['id', 'nombre_bus','placa','chasis','nombre_chofer','ruta','actions'];

  cargarDatos(){
    this.api.getAllBus().subscribe((data)=>
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
  editarbus(id){
    this.routes.navigate(['sistema/bus/editarbus/', id]);
  }
  nuevabus(){
    this.routes.navigate(['sistema/bus/nuevabus/'])
  }
  eliminar(){
    this.api.deleteBus(this.datos).subscribe(data =>{
      console.log(data);
    })
  }

}

