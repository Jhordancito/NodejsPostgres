import {BoletoI} from '../models/boleto.interface'
export interface BoletoRI{
    data: [BoletoI];
    status:string;
    mensaje:string;
}