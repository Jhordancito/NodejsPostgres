import {Router} from 'express';
const router = Router();


import { createCapacidad, getCapacidad, getoneCapacidad, deleteCapacidad, updateCapacidad } from '../controllers/capacidad.controllers'

// /api/capacidad/
router.post('/', createCapacidad);
router.get('/', getCapacidad);

// /api/projects/:projectID
router.get('/:id', getoneCapacidad);
router.delete('/:id', deleteCapacidad );
router.put('/:id', updateCapacidad);


export default router;