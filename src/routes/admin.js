import {Router} from 'express';
const router = Router();

router.get('/', (req, res) =>{
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            users: req.users
        }
    })
})

export default router;
