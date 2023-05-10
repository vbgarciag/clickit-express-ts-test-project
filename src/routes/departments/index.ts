import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => {
    res.json({
        data: [
            {
                id: 1,
                name: "Engeniering"
            },
            {
                id: 2,
                name: "Marketing"
            }
        ]
    });
});



export default router;