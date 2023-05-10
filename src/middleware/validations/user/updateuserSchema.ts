import { ValidationChain, body, param } from "express-validator";

export const updateUserSchema: ValidationChain[] = [
    param('id')
        .exists()
        .withMessage('The field id is required')
        .not()
        .isEmpty()
        .withMessage('Tis field cannot be empty')
        .isUUID(4)
        .withMessage('This id is not valid')
        .trim(), //trim quita los espacios en el body o caja de texto
    body('name')
        .optional()
        .not()
        .isEmpty()
        .withMessage('The Name cannot be null or empty!')
        .isString()
        .withMessage('The Name is not valid')
        .trim(), //trim quita los espacios en el body o caja de texto
    body('age')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Your age cannot be null or empty!')
        .isInt()
        .withMessage('This field should be a number')
        .trim(),
    body('email')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Email Address cannot be null or empty!')
        .isEmail()
        .withMessage('Email Address is not valid')
        .trim(),
    body('telephone')
        .optional()
        .not()
        .isEmpty()
        .withMessage('Your telephone cannot be null or empty!')
        .isMobilePhone('es-MX')
        .withMessage('This phone number should be a valid phone number')
        .trim(),
];