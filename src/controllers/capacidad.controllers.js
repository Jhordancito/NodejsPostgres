import { async } from 'regenerator-runtime';
import Capacidad from '../models/Capacidad';

export async function getCapacidad(req, res) {
    try {
        const capacidad = await Capacidad.findAll()
    
        res.json({data: capacidad});
    } catch (e) {
        console.log(e);
    }
}

export async function createCapacidad(req, res) {
    const { id_bus, id_buses, nro_asientos} = req.body;
    try {
        let capacidad = await Capacidad.create({
            id_bus,
            id_buses,
            nro_asientos
        }, {
            fields: ['id_bus', 'id_buses', 'nro_asientos']
        });

        if (newCapacidad) {
            return res.json({
                message: 'Capacidad creada Correctamente',
                data: newCapacidad
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneCapacidad(req, res){
    const { id } = req.params; 
    const capacidad = await Capacidad.findOne({
        where: {
            id
        }
    });
    res.json(capacidad);
};

export async function deleteCapacidad(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Capacidad.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Capacidad Eliminada Correctamente',
        count: deleteRowCount
    });
}

export async function updateCapacidad(req, res){
    const { id } = req.params;
    const {id_bus, id_buses, nro_asientos} = req.body;

    const capacidad = await Capacidad.findAll({
        attributes: ['id_bus', 'id_buses', 'nro_asientos'],
        where: {
           id
        }
    });

    if(capacidad.length > 0){
        capacidad.forEach(async boleto => {
            await capacidad.update({
                id_bus,
                id_buses,
                nro_asientos
            });
        })
    }
    return res.json({
        message: 'Capacidad Actualizada Correctamente',
        data: capacidad
    })
}