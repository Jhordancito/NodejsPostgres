import { Component, OnInit } from '@angular/core';
import { BusI } from 'src/app/models/bus.interface';
import { Router, ActivatedRoute} from '@angular/router'
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarbus',
  templateUrl: './editarbus.component.html',
  styleUrls: ['./editarbus.component.css']
})
export class EditarbusComponent implements OnInit {

  
  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosBus:BusI;
  editarForm = new FormGroup({
    
    id: new FormControl(''),
    ruta: new FormControl(''),
    placa: new FormControl(''),
    chasis: new FormControl(''),  
    
  });

  ngOnInit(): void {
    let BusI  = this.activaterouter.snapshot.paramMap.get('id');
    console.log(BusI);
    this.api.getSingleBus(BusI).subscribe(data =>{
      this.datosBus=data
      console.log(this.datosBus)
      this.editarForm.patchValue({
        id: this.datosBus.id,
        ruta: this.datosBus.ruta,
        placa: this.datosBus.placa,
        chasis: this.datosBus.chasis,
        
      });
       
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:BusI){

    this.api.putBus(form).subscribe( data =>{
      console.log(data);
    })
    
  }
}
