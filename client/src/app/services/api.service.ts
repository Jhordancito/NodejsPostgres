import { BoletoI } from './../models/boleto.interface';
import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {TerminalI} from '../models/terminal.interface';
import {TerminalRI} from '../models/responseTerminal.interface';
import {ChoferRI} from '../models/responseChofer.interface';
import {GestorBusRI} from '../models/responseGestorBus.interface';
import {BusRI} from '../models/responseBus.interface';
import {BoletoRI} from '../models/responseBoleto.interface';
import { PasajeroRI } from '../models/responsePasajero.interface';


@Injectable({

  providedIn: 'root'
})
export class BoletoService {

  url:string = "http://localhost:4000/api/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "users/login";

      console.log(this.http.post<ResponseI>(direccion,form));
      return this.http.post<ResponseI>(direccion,form);
    
  }

  getSingleBoletos(id):Observable<BoletoI>{
    let direccion = this.url + "boleto/" + id;
    return this.http.get<BoletoI>(direccion);
  }


  getAllTerminal():Observable<TerminalRI>{
    let direccion =this.url+"terminal";
    return this.http.get<TerminalRI>(direccion);
  }
  getSingleTerminal(id):Observable<TerminalRI>{
    let direccion =this.url+"terminal/" + id;
    return this.http.get<TerminalRI>(direccion);
  }
  putTerminal(form:TerminalI):Observable<TerminalRI>{
    let direccion = this.url + "terminal";
    return this.http.put<TerminalRI>(direccion,form);
  }
  getAllChofer():Observable<ChoferRI>{
    let direccion =this.url+"chofer";
    return this.http.get<ChoferRI>(direccion);
  }

  getAllGestorBus():Observable<GestorBusRI>{
    let direccion =this.url+"gestor_buses";
    return this.http.get<GestorBusRI>(direccion);
  }
  getAllBus():Observable<BusRI>{
    let direccion =this.url+"bus";
    return this.http.get<BusRI>(direccion);
  }
  getAllBoletos():Observable<BoletoRI>{
    let direccion =this.url+"boleto";
    return this.http.get<BoletoRI>(direccion);
  }
  getAllPasajeros():Observable<PasajeroRI>{
    let direccion =this.url+"pasajeros";
    return this.http.get<PasajeroRI>(direccion);
  }

}
