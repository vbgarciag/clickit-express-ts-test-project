//entry point
import "reflect-metadata"
import express from 'express';
import db from './database';
import serverRoutes from './routes';
import bodyParser from 'body-parser';
const port = 3000;

const app = express();

/* app.use(express.json()); */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.initialize()
    .then(() => {
        console.log("Data Source ha sido inicializada!")
    })
    .catch((err) => {
        console.error("Error durante la inicialiacion de la bd", err)
    })
app.use('/api/v1', serverRoutes);

//recibe el puerto y un callback
app.listen(port, () => {
    console.log(`Server listening on por ${port}`);
});

