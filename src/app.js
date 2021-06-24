import express,{json} from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks';

//Inicializaciones
const app= express();

//middlewares
app.use(morgan('dev')); //esto nos muestra los metodos http que hacemos
app.use(json()); //esto se encarga de entender los archivos json

//routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;