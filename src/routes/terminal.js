import {Router} from 'express';
const router = Router();

import { createTerminal, getTerminal, getoneTerminal, deleteTerminal, updateTerminal } from '../controllers/terminal.controllers'

// /api/boleto/
router.post('/', createTerminal);
router.get('/', getTerminal);

// /api/projects/:projectID
router.get('/:id', getoneTerminal);
router.delete('/:id', deleteTerminal );
router.put('/:id', updateTerminal);


export default router;