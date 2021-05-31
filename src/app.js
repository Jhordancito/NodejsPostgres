import express from 'express'; //Framework para el servidor
import morgan from 'morgan';
import json from 'body-parser';

//importing routes
import boletoRoutes from './routes/boleto';
import busRoutes from './routes/bus';
import capacidadRoutes from './routes/capacidad';
import choferRoutes from './routes/chofer';
import facturaRoutes from './routes/factura';
import gestor_busesRoutes from './routes/gestor_buses';
import pasajerosRoutes from './routes/pasajeros';
import terminalRoutes from './routes/terminal';

//inicialización
const app = express(); // Inicializamos

//middlewares
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


export default app;