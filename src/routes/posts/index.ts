import { Request, Response, Router } from 'express';
import { Post } from '../../database/entities/post';
import PostgresDataSource from '../../database';
const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const postRepository = PostgresDataSource.getRepository(Post)
    const newPost = new Post();

    newPost.title = body.title;
    newPost.description = body.description;
    newPost.user_id = body.user_id;

    const postResult = await postRepository.save(newPost)

    res.status(200).json({
        data: {
            post: postResult,
            message: "Tu post se ha realizado correctamente!"
        }
    })
});

export default router;