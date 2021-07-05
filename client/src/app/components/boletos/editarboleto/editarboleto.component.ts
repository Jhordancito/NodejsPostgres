import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoletoI } from 'src/app/models/boleto.interface';

@Component({
  selector: 'app-editarboleto',
  templateUrl: './editarboleto.component.html',
  styleUrls: ['./editarboleto.component.css']
})
export class EditarboletoComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosBoleto:BoletoI;
  editarForm = new FormGroup({
    
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    bioseguridad: new FormControl(''),
    precio: new FormControl(''),
    id_bus: new FormControl(''),
    origen: new FormControl(''),
    destino: new FormControl(''),
    hrs_salida: new FormControl(''),
    fecha_salida: new FormControl(''),
    ubicacion: new FormControl(''),
    id_buses: new FormControl(''),
    nro_asiento: new FormControl(''),
    id: new FormControl('')
  });

  ngOnInit(): void {
    let BoletoI = this.activaterouter.snapshot.paramMap.get('id');
    console.log(BoletoI);
    this.api.getSingleBoleto(BoletoI).subscribe(data =>{
      this.datosBoleto=data
      console.log(this.datosBoleto)
      this.editarForm.patchValue({
        nombre: this.datosBoleto.nombre,
        apellido: this.datosBoleto.apellido,
        bioseguridad: this.datosBoleto.bioseguridad,
        precio: this.datosBoleto.precio,
        id_bus: this.datosBoleto.id_bus,
        origen: this.datosBoleto.origen,
        destino: this.datosBoleto.destino,
        hrs_salida: this.datosBoleto.hrs_salida,
        fecha_salida: this.datosBoleto.fecha_salida,
        ubicacion: this.datosBoleto.ubicacion,
        id_buses: this.datosBoleto.id_buses,
        nro_asiento: this.datosBoleto.id_buses,
        id: this.datosBoleto.id,
      });
       
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:BoletoI){

    this.api.putBoleto(form).subscribe( data =>{
      console.log(data);
    })
    
  }
}
