import  app  from './app.js';
import { port } from './config.js';

app.listen(port);
console.log("Servidor escuchando desde el puerto ",port);

