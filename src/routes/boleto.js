import {Router} from 'express';
const router = Router();

import { getBoleto, createBoleto} from '../controllers/boleto.controller'
/*import { createBoleto, getBoleto, getoneBoleto, deleteBoleto, updateBoleto } from '../controllers/boleto.controller'

// /api/boleto/
router.post('/', createBoleto);
router.get('/', getBoleto);

// /api/projects/:projectID
router.get('/:id', getoneBoleto);
router.delete('/:id', deleteBoleto );
router.put('/:id', updateBoleto);
*/
router.get('/', getBoleto);
router.post('/', createBoleto);
export default router;