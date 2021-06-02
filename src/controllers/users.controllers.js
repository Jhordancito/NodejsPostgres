import { async } from 'regenerator-runtime';
import Users from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'js-tokens';
import Joi from  '@hapi/joi';

const schemaLogin = Joi.object({
    password: Joi.string().min(6).max(255).required().email(),
    email: Joi.string().min(6).max(255).required()
})

export async function login(req,res){
    const {error} = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({error: error.details[0].message})

    const Users = await Users.findAll({email: req.body.email})
    if(!users) return res.status(400).json({error: true, message: 'email no encontrado'});

    const passValida = await bcrypt.compare(req.body.password, users.password)
    if(!passValida) return res.status(400).json({error: true, mensaje: 'contraseña mal'});

    const token = jwt.sign({
        nombre: users.nombre,
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
    
    const {nombre,password,email} = req.body;
    try {
        let newUsers = await Users.create({
            nombre,
            password,
            email

        }, {
            fields: ['nombre','password','email']
        });
        
        /*const saltos = await bcrypt.getSalt(10);
        const contraseña = await bcrypt.hash(req.body.contraseña, saltos)*/
        
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