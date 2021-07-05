import {Router} from 'express';
const router = Router();


import { createPasajeros, getPasajeros, getonePasajeros, deletePasajeros, updatePasajeros} from '../controllers/pasajeros.controllers'

// /api/pasajeros/
router.post('/', createPasajeros);
router.get('/', getPasajeros);

// /api/projects/:projectID
router.get('/:cedula', getonePasajeros);
router.delete('/:cedula', deletePasajeros );
router.put('/:cedula', updatePasajeros);


export default router;