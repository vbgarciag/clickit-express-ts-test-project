import { Request } from 'express';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req: Request, file, callback) {
        const destinationFolder = path.join(__dirname, '../../uploads')
        callback(null, destinationFolder);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
export const upload = multer({ storage: storage });
