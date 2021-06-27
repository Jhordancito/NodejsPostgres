import { async } from 'regenerator-runtime';
import Pasajeros from '../models/Pasajeros';
import { sequelize } from '../database/database';

export async function getPasajeros(req, res) {
    try {
        const bus=  await sequelize.query("select p.cedula, p.fecha_nacimiento, p.genero, p.telefono, p.direccion, concat(b.nombre,' ',b.apellido) as nombre, p.id_boleto  from pasajeros p inner join boleto b on b.id=p.id_boleto",{type: 'SELECT'});
        //const pasajeros = await Pasajeros.findAll()
        res.json({data: bus});
    } catch (e) {
        console.log(e);
    }
}

export async function createPasajeros(req, res) {
    const { cedula, fecha_nacimiento, genero,telefono,direccion,id_boleto } = req.body;
    try {
        let pasajeros = await Pasajeros.create({
            cedula, 
            fecha_nacimiento, 
            genero,
            telefono,
            direccion,
            id_boleto

        }, {
            fields: ['cedula', 'fecha_nacimiento', 'genero', 'telefono', 'direccion' ,'id_boleto']
        });

        if (newPasajeros) {
            return res.json({
                message: 'Pasajeros creado Correctamente',
                data: newPasajeros
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getonePasajeros(req, res){
    const { cedula } = req.params; 
    const pasajeros = await Pasajeros.findOne({
        where: {
            cedula
        }
    });
    res.json(pasajeros);
};

export async function deletePasajeros(req, res){
    const { cedula } = req.params;
    const deleteRowCount =  await Terminal.destroy({
        where: {
            cedula
        }
    });
    res.json({
        message: 'Pasajero Eliminado Correctamente',
        count: deleteRowCount
    });
}

export async function updatePasajero(req, res){
    const { cedula } = req.params;
    const {fecha_nacimiento, genero,telefono,direccion,id_boleto} = req.body;

    const terminal = await terminal.findAll({
        attributes: ['cedula' , 'fecha_nacimiento', 'genero','telefono','direccion','id_boleto'],
        where: {
            cedula
        }
    });

    if(pasajeros.length > 0){
        pasajeros.forEach(async boleto => {
            await pasajeros.update({
                cedula,
                fecha_nacimiento, 
                genero,
                telefono,
                direccion,
                id_boleto
            });
        })
    }
    return res.json({
        message: 'Pasaero Actualizado Correctamente',
        data: pasajeros
    })
}