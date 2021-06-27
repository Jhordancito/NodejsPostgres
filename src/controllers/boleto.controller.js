import { async } from 'regenerator-runtime';
import Boleto from '../models/Boleto';
import { sequelize } from '../database/database';

export async function getBoleto(req, res) {
    try {
        const boleto=  await sequelize.query('select b.id, b.nombre, b.apellido, b.bioseguridad, b.precio, b.origen, b.destino, b.hrs_salida, b.fecha_salida, b.ubicacion, b.nro_asiento, b.id_buses, b.id_bus, bs.placa as placa , gb.nombre_bus, gb.tipo_bus from boleto b inner join bus bs on bs.id=b.id_bus inner join gestor_buses gb on gb.id=b.id_buses',{type: 'SELECT'});
        //const boleto = await Boleto.findAll()
    
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
            fields: ['nombre', 'apellido', 'bioseguridad', 'precio', 'id_bus', 'origen', 'destino', 'hrs_salida','fecha_salida','ubicacion', 'id_buses', 'nro_asiento']
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
    const {nombre, apellido, bioseguridad, precio, id_bus,origen, destino, hrs_salida, fecha_salida, ubicacion, id_buses, nro_asiento} = req.body;

    const boleto = await Boleto.findAll({
        attributes: ['nombre', 'apellido', 'bioseguridad', 'precio', 'id_bus', 'origen', 'destino', 'hrs_salida', 'fecha_salida','ubicacion','id_buses', 'nro_asiento', 'id'],
        where: {
            id
        }
    });

    if(boleto.length > 0){
        boleto.forEach(async boleto => {
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
                nro_asiento: nro_asiento,
                id: id
            });
        })
    }
    return res.json({
        message: 'Boleto Actualizado Correctamente',
        data: boleto
    })
}