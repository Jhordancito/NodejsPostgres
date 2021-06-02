import {Router} from 'express';
const router = Router();


import { createChofer, getChofer, getoneChofer, deleteChofer, updateChofer } from '../controllers/chofer.controllers'

// /api/chofer/
router.post('/', createChofer);
router.get('/', getChofer);

// /api/projects/:projectID
router.get('/:id', getoneChofer);
router.delete('/:id', deleteChofer );
router.put('/:id', updateChofer);

export default router;