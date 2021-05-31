import {Router} from 'express';
const router = Router();

import { getBoleto} from '../controllers/factura.controller'

router.get('/', getBoleto);
export default router;