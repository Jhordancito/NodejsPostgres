import { Component, OnInit } from '@angular/core';
import {TerminalI} from '../../models/terminal.interface';
import {MatTableDataSource} from '@angular/material/table';
import {  BoletoService} from '../../services/api.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {
  datos:[TerminalI];

  dataSource;


  displayedColumns: string[] = ['id', 'nombre_terminal', 'administrador', 'direccion','telefono'];
  



  cargarDatos(){
    this.api.getAllTerminal().subscribe((data)=>
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
