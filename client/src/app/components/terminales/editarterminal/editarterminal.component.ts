import { TerminalRI } from 'src/app/models/responseTerminal.interface'; 
import { TerminalI } from 'src/app/models/terminal.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {BoletoService} from '../../../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarterminal',
  templateUrl: './editarterminal.component.html',
  styleUrls: ['./editarterminal.component.css']
})
export class EditarterminalComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private routes:Router, private api:BoletoService) { }

  datosTerminal:TerminalI;
  editarForm = new FormGroup({
    
    nombre_terminal: new FormControl(''),
    administrador: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    id: new FormControl(''),
    
  });

  ngOnInit(): void {
    let TerminalI = this.activaterouter.snapshot.paramMap.get('id');
    console.log(TerminalI);
    this.api.getSingleTerminal(TerminalI).subscribe(data =>{
      console.log(data)
      this.editarForm.setValue({
        
        'nombre_terminal': this.datosTerminal.nombre_terminal,
        'administrador': this.datosTerminal.administrador,
        'direccion"': this.datosTerminal.direccion,
        'telefono': this.datosTerminal.telefono,
        'id': this.datosTerminal.id,
        
      });

       console.log(this.editarForm.value);
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form:TerminalI){

    this.api.putTerminal(form).subscribe( data =>{
      console.log(data)
    })
    
  }
}
