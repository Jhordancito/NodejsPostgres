import {Router} from 'express';
const router = Router();

import { login, createUsers, getUsers  } from '../controllers/users.controllers'

// /api/users/
router.post('/', createUsers);
router.get('/', getUsers);
router.post('/login', login);




export default router;