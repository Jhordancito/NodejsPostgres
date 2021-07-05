import { GestorBusRI } from './../../../models/responseGestorBus.interface';
import { Component, OnInit } from '@angular/core';
import { GestorBusI } from 'src/app/models/gestorBus.interface';
import { Router, ActivatedRoute} from '@angular/router'
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editargestor-buses',
  templateUrl: './editargestor-buses.component.html',
  styleUrls: ['./editargestor-buses.component.css']
})
export class EditargestorBusesComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosGestorBus: GestorBusI;
  editarForm = new FormGroup({
    
    id: new FormControl(''),
    tipo_bus: new FormControl(''),
    nombre_bus: new FormControl(''),
    fecha: new FormControl(''),
    id_terminal: new FormControl(''),
    modelo: new FormControl(''),
    color: new FormControl(''),
    capacidad: new FormControl(''),

    
    
  });

  ngOnInit(): void {
    let GestorBusI = this.activaterouter.snapshot.paramMap.get('id');
    console.log(GestorBusI);
    this.api.getSingleGestorBus(GestorBusI).subscribe(data =>{
      this.datosGestorBus=data
      console.log(this.datosGestorBus)
      this.editarForm.patchValue({
        id: this.datosGestorBus.id,
        tipo_bus: this.datosGestorBus.tipo_bus,
        nombre_bus: this.datosGestorBus.nombre_bus,
        fecha: this.datosGestorBus.fecha,
        id_terminal: this.datosGestorBus.id_terminal,
        modelo: this.datosGestorBus.modelo,
        color: this.datosGestorBus.color,
        capacidad: this.datosGestorBus.color,
      });
       
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:GestorBusI){

    this.api.putGestorBus(form).subscribe( data =>{
      console.log(data);
    })
    
  }
}

