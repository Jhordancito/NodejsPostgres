import { async } from 'regenerator-runtime';
import Factura from '../models/Factura';

export async function getFactura(req, res) {
    try {
        const factura = await Factura.findAll()
    
        res.json({data: factura});
    } catch (e) {
        console.log(e);
    }
}

export async function createFactura(req, res) {
    const { nit, nombre_completo, id_boleto } = req.body;
    try {
        let factura = await Factura.create({
            nit,
            nombre_completo,
            id_boleto

        }, {
            fields: ['nit', 'nombre_completo', 'id_boleto']
        });

        if (newFactura) {
            return res.json({
                message: 'Factura creada Correctamente',
                data: newFactura
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneFactura(req, res){
    const { nit } = req.params; 
    const factura = await Factura.findOne({
        where: {
            nit
        }
    });
    res.json(factura);
};

export async function deleteFactura(req, res){
    const { nit } = req.params;
    const deleteRowCount =  await Factura.destroy({
        where: {
            nit
        }
    });
    res.json({
        message: 'Factura Eliminada Correctamente',
        count: deleteRowCount
    });
}

export async function updateFactura(req, res){
    const { nit } = req.params;
    const {nombre_completo, id_boleto} = req.body;

    const factura = await Factura.findAll({
        attributes: ['nombre_completo', 'id_boleto'],
        where: {
           nit
        }
    });

    if(factura.length > 0){
        factura.forEach(async boleto => {
            await factura.update({
                nit,
                nombre_completo,
                id_boleto
            });
        })
    }
    return res.json({
        message: 'Factura Actualizada Correctamente',
        data: factura
    })
}