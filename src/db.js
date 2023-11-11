import { createPool } from 'mysql2/promise';
import { database, dbPort, host, password, port, user } from './config.js';

export const pool =  createPool(
    {
        host: host,
        user: user,
        password: password,
        port: dbPort,
        database: database
    }
);

