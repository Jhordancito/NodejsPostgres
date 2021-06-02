import {Router} from 'express';
const router = Router();


import { createBus, getBus, getoneBus, deleteBus, updateBus } from '../controllers/bus.controllers'

// /api/bus/
router.post('/', createBus);
router.get('/', getBus);

// /api/projects/:projectID
router.get('/:id', getoneBus);
router.delete('/:id', deleteBus );
router.put('/:id', updateBus);


export default router;