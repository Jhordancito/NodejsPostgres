import { async } from 'regenerator-runtime';
import Pasajeros from '../models/Pasajeros';
import { sequelize } from '../database/database';

export async function getPasajeros(req, res) {
    try {
        const pasajeros=  await sequelize.query("select p.cedula, p.fecha_nacimiento, p.genero, p.telefono, p.direccion, concat(b.nombre,' ',b.apellido) as nombre, p.id_boleto  from pasajeros p inner join boleto b on b.id=p.id_boleto",{type: 'SELECT'});
        //const pasajeros = await Pasajeros.findAll()
        res.json({data: pasajeros});
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
            id_boleto,

        }, {
            fields: ['cedula', 'fecha_nacimiento', 'genero', 'telefono', 'direccion' , 'id_boleto']
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
    const deleteRowCount =  await Pasajeros.destroy({
        where: {
            cedula
        }
    });
    res.json({
        message: 'Pasajero Eliminado Correctamente',
        count: deleteRowCount
    });
}

export async function updatePasajeros(req, res){
    const { cedula } = req.params;
    const {fecha_nacimiento, genero,telefono,direccion,id_boleto} = req.body;

    const pasajeros = await Pasajeros.findAll({
        attributes: ['fecha_nacimiento', 'genero','telefono','direccion','id_boleto','cedula'],
        where: {
            cedula
        }
    });

    if(pasajeros.length > 0){
        pasajeros.forEach(async pasajeros => {
            await pasajeros.update({
                cedula: cedula,
                fecha_nacimiento: fecha_nacimiento, 
                genero: genero,
                telefono: telefono,
                direccion: direccion,
                id_boleto: id_boleto
            });
        })
    }
    return res.json({
        message: 'Pasajero Actualizado Correctamente',
        data: pasajeros
    })
}