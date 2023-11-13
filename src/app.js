import express from 'express';
import {pool} from './db.js';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import cors from 'cors';


import './config.js'
const app = express();

app.use(cors());
app.use(express.json());

app.use( indexRoutes );
app.use('/api', employeesRoutes );

app.use ( ( req, res, next) =>
{
    res.status(404).json(
        {
            message: "Endpoint not found!!!"
        }
    );
})

export default app;