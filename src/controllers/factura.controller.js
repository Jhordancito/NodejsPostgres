import { async } from 'regenerator-runtime';
import Factura from '../models/Factura';

export async function getBoleto(req, res) {
    try {
        const factura = await Factura.findAll()
        res.json({
            data: factura
        });
    } catch (e) {
        console.log(e);
     }

}