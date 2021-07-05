import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChoferI } from 'src/app/models/chofer.interface'; 

@Component({
  selector: 'app-editarchofer',
  templateUrl: './editarchofer.component.html',
  styleUrls: ['./editarchofer.component.css']
})
export class EditarchoferComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosChofer:ChoferI;
  editarForm = new FormGroup({
    
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    genero: new FormControl(''),
    direccion: new FormControl(''),
    tipo_sangre: new FormControl(''),
    telefono: new FormControl(''),
    id_terminal: new FormControl(''),
    
    
  });

  ngOnInit(): void {
    let ChoferI = this.activaterouter.snapshot.paramMap.get('id');
    console.log(ChoferI);
    this.api.getSingleChofer(ChoferI).subscribe(data =>{
      this.datosChofer=data
      console.log(this.datosChofer)
      this.editarForm.patchValue({
        id: this.datosChofer.id,
        nombre: this.datosChofer.nombre,
        apellido: this.datosChofer.apellido,
        genero: this.datosChofer.genero,
        direccion: this.datosChofer.direccion,
        tipo_sangre: this.datosChofer.tipo_sangre,
        telefono: this.datosChofer.telefono,
        id_terminal: this.datosChofer.id_terminal,
      });
       
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:ChoferI){

    this.api.putChofer(form).subscribe( data =>{
      console.log(data);
    })
    
  }
}

