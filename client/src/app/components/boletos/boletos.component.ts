import { Component, OnInit } from '@angular/core';
import {BoletoService} from '../../services/api.service'
import {Router} from '@angular/router';

import {BoletosI } from '../../models/boletos';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent implements OnInit {

  boletos:BoletosI[];

  constructor(private api:BoletoService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllBoletos(1).subscribe(data => {
      console.log(data)
    })
  }


  editarBoleto(id){
    this.router.navigate(['editar', id]);
  }  

  nuevoBoleto(){
    this.router.navigate(['nuevo']);
  }
}
