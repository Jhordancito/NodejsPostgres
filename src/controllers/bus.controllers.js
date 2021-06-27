import { async } from 'regenerator-runtime';
import Bus from '../models/Bus';
//import { QueryTypes } from 'sequelize';

import { sequelize } from '../database/database';
//import { QueryTypes } from 'sequelize/types';

export async function getBus(req, res) {
    try {
        //const bus = await Bus.findAll()
        
        const bus=  await sequelize.query('select b.id, b.ruta, b.placa, b.chasis, b.id_chofer, b.id_buses, concat(c.nombre,c.apellido) as nombre_chofer , gb.nombre_bus from bus b inner join chofer c on c.id=b.id_chofer inner join gestor_buses gb on gb.id=b.id_buses',{type: 'SELECT'});
        res.json({data: bus});
    } catch (e) {
        console.log(e);
    }
}

export async function createBus(req, res) {
    const { id_buses, ruta, id_chofer, placa, chasis} = req.body;
    try {
        let newBus = await Bus.create({
            id_buses, 
            ruta, 
            id_chofer,
             placa,
              chasis

        }, {
            fields: ['id_buses', 'ruta', 'id_chofer', 'placa', 'chasis']
        });

        if (newBus) {
            return res.json({
                message: 'Bus creado Correctamente',
                data: newBus
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneBus(req, res){
    const { id } = req.params; 
    const bus = await Bus.findOne({
        where: {
            id: id
        }
    });
    res.json(bus);
};

export async function deleteBus(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Bus.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Bus Eliminada Correctamente',
        count: deleteRowCount
    });
}

export async function updateBus(req, res){
    const { id } = req.params;
    const {id_buses, ruta, id_chofer, placa, chasis} = req.body;

    const bus = await bus.findAll({
        attributes: ['id_buses', 'ruta', 'id_chofer', 'placa', 'chasis'],
        where: {
            id
        }
    });

    if(bus.length > 0){
        bus.forEach(async boleto => {
            await bus.update({
                id_buses,
                ruta,
                id_chofer,
                placa,
                chasis
            });
        })
    }
    return res.json({
        message: 'Bus Actualizado Correctamente',
        data: bus
    })
}