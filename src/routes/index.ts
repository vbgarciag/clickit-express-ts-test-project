import { Router } from'express';
import userRoutes from './user';
import departmentRoutes from './departments';
import postsRoutes from './posts';
const router = Router();

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/departments', departmentRoutes);
export default router;
