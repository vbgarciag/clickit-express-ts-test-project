import { Request, Response, Router } from 'express';
import { User } from "../../database/entities/user";
import { ValidationChain, checkSchema, validationResult } from 'express-validator';
import PostgresDataSource from '../../database';
import { createUserSchema } from '../../middleware/validations/user/createUserValidator';
import { validate } from '../../middleware/validations';
import { updateUserSchema } from '../../middleware/validations/user/updateuserSchema';
import { upload } from '../../middleware/uploadsFiles/uploadFiles';

const router = Router();
// en asignacion del la variable del lado izquierdo recibe el valor del lado derecho


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const userRepository = PostgresDataSource.getRepository(User)
    const user = await userRepository.findOne({
        where: {
            id
        }
    })
    console.log(user);
    if(! user){
            return res.status(404).json({
                message: "Este usuario no se encuentra registrado"
            })
    } else{
        res.status(200).json({
            data: user
        })
    };
});

router.get('/', async (req,res) => {
    const usersRepository = PostgresDataSource.getRepository(User)
    const users = await usersRepository.find();
    return res.status(201).json({
        data: users
    });
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const usersRepository = PostgresDataSource.getRepository(User)
    const user = await usersRepository.findOne({
        where: {
            id
        }
    })
    if(! user){
            return res.status(404).json({
                message: "El usuario que estas intentado eliminar no existe actualmente en la base de datos."
            })
    }
        await usersRepository.delete(id);
        return res.status(201).json({
            messaje: "El usuario ha sido eliminado correctamente."
        });
    
});

router.put('/:id', validate(updateUserSchema), async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const usersRepository = PostgresDataSource.getRepository(User);
    const userUpdate = usersRepository.findOne({
        where: {
            id
        }
    })
    if(! userUpdate ) {
        return res.status(404).json({
            messaje: "El usuario no se encuentra en la base de datos"
        })
    }
    const result = await usersRepository.update(
        {
            id: id
        },
        body
    )
    res.status(200).json({
        result,
        messaje: "Usuario actualizado"
    })
    

})


router.post('/',  upload.single('image') , validate(createUserSchema), async (req: Request, res: Response) => {
    console.log(req.files);
    console.log(req.file);
    console.log(req.body);
    const resultValidator = validationResult(req);
    if(!resultValidator.isEmpty()){
        return res.status(400).json({
            errors: resultValidator.array()
        })
    }
    const body = req.body;
    const userRepository = PostgresDataSource.getRepository(User)
    const newUser = new User();
    newUser.name = body.name;
    newUser.age = body.age;
    newUser.email = body.email;
    newUser.telephone = body.telephone;
    
    const result = await userRepository.save(newUser)

    res.status(200).json({
        data: {
            user: result,
            message: "Te has registrado correctamente!"
        }
    })

});



export default router;