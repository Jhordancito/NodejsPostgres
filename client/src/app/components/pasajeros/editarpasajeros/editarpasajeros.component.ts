import { Component, OnInit } from '@angular/core';
import {PasajeroI} from '../../../models/pasajero.interface';
import { Router, ActivatedRoute} from '@angular/router';
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editarpasajeros',
  templateUrl: './editarpasajeros.component.html',
  styleUrls: ['./editarpasajeros.component.css']
})
export class EditarpasajerosComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosPasajero: PasajeroI;
  editarpForm = new FormGroup({
    
    cedula: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    
  });

  ngOnInit(): void {
    let PasajeroI = this.activaterouter.snapshot.paramMap.get('id');
    console.log(PasajeroI);
    this.api.getSinglePasajero(PasajeroI).subscribe(data =>{
      this.datosPasajero =data
      console.log(this.datosPasajero)
      this.editarpForm.patchValue({
        cedula: this.datosPasajero.cedula,
        fecha_nacimiento: this.datosPasajero.fecha_nacimiento,
        telefono: this.datosPasajero.telefono,
        direccion: this.datosPasajero.direccion,
      });
       
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:PasajeroI){

    this.api.putPasajero(form).subscribe( data =>{
      console.log(data);
    })
    
  }

}
