import {Router} from 'express';
const router = Router();

import { login, createUsers, getUsers, getoneUsers, deleteUsers, updateUsers  } from '../controllers/users.controllers'

// /api/users/
router.post('/', createUsers);
router.get('/', getUsers);
router.post('/login', login);

router.get('/:id', getoneUsers);
router.delete('/:id', deleteUsers );
router.put('/:id', updateUsers);


export default router;