import express from "express";
import {
    createBook,
    getAllBook,
    getBookById, 
    updateBook,
    deleteBook,
} from "../controllers/book.controllers.js";

const routes = express.Router();

routes.get("/" , getAllBook);
routes.get("/:id", getBookById);
routes.post("/" , createBook);
routes.put("/:id" , updateBook);
routes.delete("/:id" , deleteBook);

export default routes;