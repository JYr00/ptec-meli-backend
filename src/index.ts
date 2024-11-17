import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './modules/products/api/routes/productRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


// Registrar rutas
app.use('/api/products', productRoutes);

const PORT = process.env.PORT ?? 5010;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});