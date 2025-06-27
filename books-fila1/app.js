import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import bookRoutes from "./src/routes/book.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000; 

app.use(express.json());
app.use("/api/books", bookRoutes);
const PORT = process.env.PORT || 4000;

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("No se ah establecido la conexion a la base de datos!");

        await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error al conectar a la base de datos: ", error);
  }
};

init();