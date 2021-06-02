import {Router} from 'express';
const router = Router();


import { createGestor_buses, getGestor_buses, getoneGestor_buses, deleteGestor_buses, updateGestor_buses } from '../controllers/gestor_buses.controllers'

// /api/gestor_bus/
router.post('/', createGestor_buses);
router.get('/', getGestor_buses);

// /api/projects/:projectID
router.get('/:id', getoneGestor_buses);
router.delete('/:id', deleteGestor_buses);
router.put('/:id', updateGestor_buses);


export default router;