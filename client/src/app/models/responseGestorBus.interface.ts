import {GestorBusI} from '../models/gestorBus.interface'
export interface GestorBusRI{
    data: [GestorBusI];
    status:string;
    mensaje:string;
}