import { async } from 'regenerator-runtime';
import Users from '../models/Users';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import Joi from  '@hapi/joi';
import { response } from 'express';
const saltos = 10;
const schemaLogin = Joi.object({
    password: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required()
})

export async function login(req,res){
    const {error} = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message})
    const user = await Users.findOne({
        where:{
            email: req.body.email
        }
    });
    if(!user) return res.status(400).json({error: true, message: 'email no encontrado'});

    const passValida = await bcrypt.compare(req.body.password, user.password)
    if(!passValida) return res.status(400).json({error: true, mensaje: 'contraseña mal'});

    const token = jwt.sign({
        nombre: user.nombre,
        id: user.id
    }, process.env.TOKEN_SECRET)
    
    res.json({
        error: null,
        message: 'Bienvenido',
        token: token
    })

}

export async function getUsers(req, res) {
    try {
        const users = await Users.findAll()
    
        res.json({data: users});
    } catch (e) {
        console.log(e);
    }
}

export async function createUsers(req, res) {
    
    const {nombre,email} = req.body;
    let password=req.body.password;
    password = await bcrypt.hash(password, saltos)
  //  return res.json({passwordhash})
    try {
        let newUsers = await Users.create({
            nombre,
            password,
            email

        }, {
            fields: ['nombre','password','email']
        });
        
        
        if (newUsers) {
            return res.json({
                message: 'Usuario creado Correctamente',
                data: newUsers
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Algo va mal',
            data: {}
        });
    }

}

export async function getoneUsers(req, res){
    const { id } = req.params; 
    const users = await Users.findOne({
        where: {
            id: id
        }
    });
    res.json(users);
};

export async function deleteUsers(req, res){
    const { id } = req.params;
    const deleteRowCount =  await Users.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Usuario Eliminado Correctamente',
        count: deleteRowCount
    });
}

export async function updateUsers(req, res){
    const { id } = req.params;
    const {nombre,password,email} = req.body;

    const users = await Users.findAll({
        attributes: ['nombre','password','email'],
        where: {
            id
        }
    });

    if(users.length > 0){
        users.forEach(async boleto => {
            await users.update({
                nombre: nombre,
                password: password,
                email: email
            });
        })
    }
    return res.json({
        message: 'Usuario Actualizado Correctamente',
        data: users
    })
}