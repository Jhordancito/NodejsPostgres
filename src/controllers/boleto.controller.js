import { async } from 'regenerator-runtime';
import Boleto from '../models/Boleto';

export async function getBoleto(req, res) {
    try {
        const boleto = await Boleto.findAll()
    
        res.json({data: boleto});
    } catch (e) {
        console.log(e);
    }
}

export async function createBoleto(req, res) {
    const { nombre, apellido, bioseguridad, precio, id_bus, origen, destino, hrs_salida, fecha_salida, ubicacion, id_buses, nro_asiento } = req.body;
    try {
        let newBoleto = await Boleto.create({
            nombre: nombre,
            apellido: apellido,
            bioseguridad: bioseguridad,
            precio: precio,
            id_bus: id_bus,
            origen: origen,
            destino: destino,
            hrs_salida: hrs_salida,
            fecha_salida: fecha_salida,
            ubicacion: ubicacion,
            id_buses: id_buses,
            nro_asiento: nro_asiento

        }, {
            fields: ['nombre', 'apellido', ' bioseguridad', 'precio', 'id_bus', ' origen', 'destino', 'hrs_salida', 'ubicacion', 'id_buses', 'nro_asiento']
        });

        if (newBoleto) {
            return res.json({
                message: 'Boleto creado Correctamente',
                data: newBoleto
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}
/*
export async function getoneBoleto(req, res){
    const { id } = req.params; 
    const boleto = await Boleto.findOne({
        where: {
            id: id
        }
    });
    res.json(boleto);
};

export async function deleteBoleto(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Boleto.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Boleto Eliminado Correctamente',
        count: deleteRowCount
    });
}

export async function updateBoleto(req, res){
    const { id } = req.params;
    const {nombre,apellido,bioseguridad,precio,id_bus, origen, destino, hrs_salida, ubicacion, id_buses, nro_asiento} = req.body;

    const Boleto = await Boleto.findAll({
        attributes: ['nombre', 'apellido', ' bioseguridad', 'precio', 'id_bus', ' origen', 'destino', 'hrs_salida', 'ubicacion', 'id_buses', 'nro_asiento','id'],
        where: {
            id
        }
    });

    if(boleto.length > 0){
        boleto.forEach( async boleto => {
            await boleto.update({
                nombre: nombre,
                apellido: apellido,
                bioseguridad: bioseguridad,
                precio: precio,
                id_bus: id_bus,
                origen: origen,
                destino: destino,
                hrs_salida: hrs_salida,
                fecha_salida: fecha_salida,
                ubicacion: ubicacion,
                id_buses: id_buses,
                nro_asiento: nro_asiento
            })
        })
    }
    return res.json({
        message: 'Boleto Actualizado Correctamente',
        data: boleto
    })
}*/