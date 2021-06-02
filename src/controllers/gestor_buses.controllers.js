import { async } from 'regenerator-runtime';
import Gestor_buses from '../models/Gestor_buses';

export async function getGestor_buses(req, res) {
    try {
        const gestor_buses = await Gestor_buses.findAll()
    
        res.json({data: gestor_buses});
    } catch (e) {
        console.log(e);
    }
}

export async function createGestor_buses(req, res) {
    const { tipo_bus, nombre_bus, fecha, id_terminal, modelo, color, capacidad } = req.body;
    try {
        let newTerminal = await Terminal.create({
            tipo_bus,
            nombre_bus,
            fecha,
            id_terminal,
            modelo,
            color,
            capacidad

        }, {
            fields: ['tipo_bus', 'nombre_bus', 'fecha', 'id_terminal', 'modelo', 'color', 'capacidad']
        });

        if (newGestor_buses) {
            return res.json({
                message: 'Gestor_buses creada Correctamente',
                data: newGestor_buses
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneGestor_buses(req, res){
    const { id } = req.params; 
    const gestor_buses = await Gestor_buses.findOne({
        where: {
            id: id
        }
    });
    res.json(gestor_buses);
};

export async function deleteGestor_buses(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Gestor_buses.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Gestor de buses Eliminada Correctamente',
        count: deleteRowCount
    });
}

export async function updateGestor_buses(req, res){
    const { id } = req.params;
    const {tipo_bus, nombre_bus, fecha, id_terminal, modelo, color, capacidad} = req.body;

    const gestor_buses = await gestor_buses.findAll({
        attributes: ['tipo_bus', 'nombre_bus', 'fecha', 'id_terminal', 'modelo', 'color', 'capacidad'],
        where: {
            id
        }
    });

    if(gestor_buses.length > 0){
        gestor_buses.forEach(async boleto => {
            await gestor_buses.update({
                tipo_bus,
                nombre_bus,
                fecha, 
                id_terminal,
                modelo,
                color,
                capacidad
            });
        })
    }
    return res.json({
        message: 'Gestor de buses Actualizada Correctamente',
        data: gestor_buses
    })
}