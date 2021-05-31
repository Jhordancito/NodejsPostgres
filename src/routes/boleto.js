import {Router} from 'express';
const router = Router();


import { createBoleto, getBoleto, getoneBoleto, deleteBoleto, updateBoleto } from '../controllers/boleto.controller'

// /api/boleto/
router.post('/', createBoleto);
router.get('/', getBoleto);

// /api/projects/:projectID
router.get('/:id', getoneBoleto);
router.delete('/:id', deleteBoleto );
router.put('/:id', updateBoleto);

export default router;