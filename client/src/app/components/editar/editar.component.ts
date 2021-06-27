import { BoletoService } from './../../services/api.service';
import { FormControl, FormGroup, Validator} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { BoletoI } from '../../models/boleto.interface';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private boleto:BoletoService) { }

  datosBoleto:BoletoI;
  editarForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    bioseguridad: new FormControl(''),
    precio:  new FormControl(''),
    id_bus:  new FormControl(''),
    origen:  new FormControl(''),
    destino:  new FormControl(''),
    hrs_salida: new FormControl(''), 
    fecha_salida: new FormControl(''),
    ubicacion:  new FormControl(''),
    id_buses: new FormControl(''),
    nro_asiento: new FormControl('')

  });
  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.boleto.getSingleBoletos(id).subscribe(data =>{
      console.log(data)
    })
    
  }

}
