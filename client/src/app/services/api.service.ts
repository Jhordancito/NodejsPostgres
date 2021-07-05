import { PasajeroI } from './../models/pasajero.interface';
import { TerminalI } from 'src/app/models/terminal.interface';
import { BoletoI } from './../models/boleto.interface';
import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {TerminalRI} from '../models/responseTerminal.interface';
import {ChoferRI} from '../models/responseChofer.interface';
import {GestorBusRI} from '../models/responseGestorBus.interface';
import {BusRI} from '../models/responseBus.interface';
import {BoletoRI} from '../models/responseBoleto.interface';
import { PasajeroRI } from '../models/responsePasajero.interface';
import { GestorBusI } from '../models/gestorBus.interface';
import { BusI } from '../models/bus.interface';
import {ChoferI} from '../models/chofer.interface'


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
  getSingleBoleto(id):Observable<BoletoI>{
    let direccion = this.url + "boleto/" + id;
    return this.http.get<BoletoI>(direccion);
  }
  putBoleto(form:BoletoI):Observable<BoletoRI>{
    let direccion = this.url + "boleto/:id" ;
    return this.http.put<BoletoRI>(direccion, form);
  }
  deleteBoleto(id):Observable<BoletoRI>{
    let direccion = this.url + "boleto/" + id;
    return this.http.delete<BoletoRI>(direccion);
  }
  getAllTerminal():Observable<TerminalRI>{
    let direccion =this.url+"terminal";
    return this.http.get<TerminalRI>(direccion);
  }
  getSingleTerminal(id):Observable<TerminalI>{
    let direccion =this.url+"terminal/" + id;
    return this.http.get<TerminalI>(direccion);
  }
  putTerminal(form:TerminalI):Observable<TerminalRI>{
    let direccion = this.url + "terminal/:id" ;
    return this.http.put<TerminalRI>(direccion, form);
  }
  deleteterminal(id):Observable<TerminalRI>{
    let direccion = this.url + "terminal/" + id;
    return this.http.delete<TerminalRI>(direccion);
  }
  getAllChofer():Observable<ChoferRI>{
    let direccion =this.url+"chofer";
    return this.http.get<ChoferRI>(direccion);
  }
  getSingleChofer(id):Observable<ChoferI>{
    let direccion =this.url+"chofer/" + id;
    return this.http.get<ChoferI>(direccion);
  }
  putChofer(form:ChoferI):Observable<ChoferRI>{
    let direccion = this.url + "chofer/:id" ;
    return this.http.put<ChoferRI>(direccion, form);
  }
  deletechofer(id):Observable<ChoferRI>{
    let direccion = this.url + "terminal/" + id;
    return this.http.delete<ChoferRI>(direccion);
  }

  getAllGestorBus():Observable<GestorBusRI>{
    let direccion =this.url+"gestor_buses";
    return this.http.get<GestorBusRI>(direccion);
  }
  getSingleGestorBus(id):Observable<GestorBusI>{
    let direccion =this.url+"gestor_buses/" + id;
    return this.http.get<GestorBusI>(direccion);
  }
  putGestorBus(form:GestorBusI):Observable<GestorBusRI>{
    let direccion = this.url + "gestor_buses/:id" ;
    return this.http.put<GestorBusRI>(direccion, form);
  }
  deleteteGesorBus(id):Observable<GestorBusRI>{
    let direccion = this.url + "gestor_buses/" + id;
    return this.http.delete<GestorBusRI>(direccion);
  }
  getAllBus():Observable<BusRI>{
    let direccion =this.url+"bus";
    return this.http.get<BusRI>(direccion);
  }
  getSingleBus(id):Observable<BusI>{
    let direccion =this.url+"bus/" + id;
    return this.http.get<BusI>(direccion);
  }
  putBus(form:BusI):Observable<BusRI>{
    let direccion = this.url + "bus/:id" ;
    return this.http.put<BusRI>(direccion, form);
  }
  deleteBus(id):Observable<BusRI>{
    let direccion = this.url + "bus/" + id;
    return this.http.delete<BusRI>(direccion);
  }
  getAllBoletos():Observable<BoletoRI>{
    let direccion =this.url+"boleto";
    return this.http.get<BoletoRI>(direccion);
  }
  getAllPasajeros():Observable<PasajeroRI>{
    let direccion =this.url+"pasajeros";
    return this.http.get<PasajeroRI>(direccion);
  }
  getSinglePasajero(cedula):Observable<PasajeroI>{
    let direccion =this.url+"pasajeros/" + cedula;
    return this.http.get<PasajeroI>(direccion);
  }
  putPasajero(form:PasajeroI):Observable<PasajeroRI>{
    let direccion = this.url + "pasajeros/:cedula" ;
    return this.http.put<PasajeroRI>(direccion, form);
  }
  deletePasajero(cedula):Observable<PasajeroRI>{
    let direccion = this.url + "pasajeros/" + cedula;
    return this.http.delete<PasajeroRI>(direccion);
  }

}
