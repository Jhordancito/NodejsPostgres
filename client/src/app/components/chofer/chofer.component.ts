import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';
import {ChoferI} from '../../models/chofer.interface'

import {Router} from '@angular/router';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {
  datos:[ChoferI];

  dataSource;

  displayedColumns: string[] = ['id', 'nombre','apellido','genero','tipo_sangre', 'direccion','telefono','id_terminal'];

  cargarDatos(){
    this.api.getAllChofer().subscribe((data)=>
      {
        console.log(data.data);
        this.datos= data.data;
        this.dataSource = new MatTableDataSource(this.datos);
        console.log(this.dataSource);
        console.log(this.datos);
      });
  }

  constructor( private api:BoletoService,private routes:Router) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
