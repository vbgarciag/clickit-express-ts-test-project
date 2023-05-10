import { ValidationChain, body, check } from "express-validator";

export const createUserSchema: ValidationChain[] = [
    check('image').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Image file is required');
        }
        return true;
    }),
    body('name')
        .exists()
        .withMessage('The Name is a required field!')
        .not()
        .isEmpty()
        .withMessage('The Name cannot be null or empty!')
        .isString()
        .withMessage('The Name is not valid')
        .trim(), //trim quita los espacios en el body o caja de texto
    body('age')
        .exists()
        .withMessage('Your age is a required field!')
        .not()
        .isEmpty()
        .withMessage('Your age cannot be null or empty!')
        .isInt()
        .withMessage('This field should be a number')
        .trim(),
    body('email')
        .exists()
        .withMessage('Email Address is a required field!')
        .not()
        .isEmpty()
        .withMessage('Email Address cannot be null or empty!')
        .isEmail()
        .withMessage('Email Address is not valid')
        .trim(),
    body('telephone')
        .exists()
        .withMessage('Your telephone is a required field!')
        .not()
        .isEmpty()
        .withMessage('Your telephone cannot be null or empty!')
        .isMobilePhone('es-MX')
        .withMessage('This telephone should be a valid phone number')
        .trim(),
];