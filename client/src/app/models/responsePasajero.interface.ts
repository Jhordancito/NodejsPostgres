import {PasajeroI} from '../models/pasajero.interface'
export interface PasajeroRI{
    data: [PasajeroI];
    status:string;
    mensaje:string;
}