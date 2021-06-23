import { BoletosI } from './../models/boletos';
import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class BoletoService {

  url:string = "http://localhost:4000/api/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return  this.http.post<ResponseI>(direccion,form);
  }

  getAllBoletos(page:number):Observable<BoletosI>{
    let direccion = this.url + "boleto/";
    return this.http.get<BoletosI>(direccion);
  }

  getSingleBoletos(id):Observable<BoletosI>{
    let direccion = this.url + "boleto/" + id;
    return this.http.get<BoletosI>(direccion);
  }
}
