import { Time } from "@angular/common";

export interface BoletoI{
    id:number;
    nombre:string;   
    apellido: string;  
    bioseguridad: string; 
    precio: number; 
    id_bus: number; 
    origen: string; 
    destino: string; 
    hrs_salida: Time; 
    fecha_salida: Date; 
    ubicacion: string; 
    id_buses: number; 
    nro_asiento: number;
    nombre_bus: string;
    tipo_bus: string;
    placa: string;

}