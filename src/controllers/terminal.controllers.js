import { async } from 'regenerator-runtime';
import Terminal from '../models/Terminal';

export async function getTerminal(req, res) {
    try {
        const terminal = await Terminal.findAll()
    
        res.json({mensaje: 'Recuperado Exitosamente',
        data: terminal});
    } catch (e) {
        console.log(e);
    }
}

export async function createTerminal(req, res) {
    const { nombre_terminal, administrador, direccion, telefono} = req.body;
    try {
        let newTerminal = await Terminal.create({
            nombre_terminal, 
            administrador,
             direccion, 
             telefono

        }, {
            fields: ['nombre_terminal', 'administrador', 'direccion', 'telefono']
        });

        if (newTerminal) {
            return res.json({
                message: 'Terminal creada Correctamente',
                data: newTerminal
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneTerminal(req, res){
    const { id } = req.params; 
    const terminal = await Terminal.findOne({
        where: {
            id: id
        }
    });
    res.json(terminal);
};

export async function deleteTerminal(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Terminal.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Terminal Eliminada Correctamente',
        count: deleteRowCount
    });
}

export async function updateTerminal(req, res){
    const { id } = req.params;
    const {nombre_terminal, administrador, direccion, telefono} = req.body;

    const terminal = await terminal.findAll({
        attributes: ['nombre_terminal', 'administrador', 'direccion', 'telefono'],
        where: {
            id
        }
    });

    if(terminal.length > 0){
        terminal.forEach(async boleto => {
            await terminal.update({
                nombre_terminal,
                administrador,
                direccion, 
                telefonon,
                id
            });
        })
    }
    return res.json({
        message: 'Terminal Actualizada Correctamente',
        data: terminal
    })
}