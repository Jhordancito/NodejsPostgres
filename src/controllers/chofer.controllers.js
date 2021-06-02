import { async } from 'regenerator-runtime';
import Chofer from '../models/Chofer';

export async function getChofer(req, res) {
    try {
        const chofer = await Chofer.findAll()
    
        res.json({data: chofer});
    } catch (e) {
        console.log(e);
    }
}

export async function createChofer(req, res) {
    const { nombre, apellido, genero, direccion, tipo_sangre, telefono, id_terminal } = req.body;
    try {
        let chofer = await Chofer.create({
            nombre,
            apellido,
            genero,
            direccion,
            tipo_sangre,
            telefono,
            id_terminal

        }, {
            fields: ['nombre', 'apellido', 'genero', 'direccion','tipo_sangre' ,'telefono', 'id_terminal']
        });

        if (newChofer) {
            return res.json({
                message: 'Chofer creada Correctamente',
                data: newChofer
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneChofer(req, res){
    const { id } = req.params; 
    const chofer = await Chofer.findOne({
        where: {
            id
        }
    });
    res.json(chofer);
};

export async function deleteChofer(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Chofer.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Chofer Eliminado Correctamente',
        count: deleteRowCount
    });
}

export async function updateChofer(req, res){
    const { id } = req.params;
    const { nombre, apellido, genero, direccion, tipo_sangre, telefono, id_terminal} = req.body;

    const chofer = await Chofer.findAll({
        attributes: [ 'nombre', 'apellido', 'genero', 'direccion', 'tipo_sangre', 'telefono', 'id_terminal'],
        where: {
           id
        }
    });

    if(chofer.length > 0){
        chofer.forEach(async boleto => {
            await chofer.update({
                nombre,
                apellido,
                genero,
                direccion,
                tipo_sangre,
                telefono,
                id_terminal
            });
        })
    }
    return res.json({
        message: 'Chofer Actualizado Correctamente',
        data: chofer
    })
}