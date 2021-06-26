import express from 'express'; //Framework para el servidor
import cors from 'cors';

import morgan from 'morgan';
import json from 'body-parser';
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()

//importing routes
import boletoRoutes from './routes/boleto';
import busRoutes from './routes/bus';
import capacidadRoutes from './routes/capacidad';
import choferRoutes from './routes/chofer';
import facturaRoutes from './routes/factura';
import gestor_busesRoutes from './routes/gestor_buses';
import pasajerosRoutes from './routes/pasajeros';
import terminalRoutes from './routes/terminal';
import usersRoutes from './routes/users';
import validaToken from './routes/validate-token';
import admin from './routes/admin';

//inicialización
const app = express(); // Inicializamos

//middlewares
app.use(cors());
app.use(morgan('start'));
app.use(json.json());


//routes
app.use('/api/boleto', boletoRoutes);
app.use('/api/bus', busRoutes)
app.use('/api/capacidad', capacidadRoutes);
app.use('/api/chofer', choferRoutes);
app.use('/api/factura', facturaRoutes);
app.use('/api/gestor_buses', gestor_busesRoutes);
app.use('/api/pasajeros', pasajerosRoutes);
app.use('/api/terminal', terminalRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admin',validaToken, admin)


export default app;