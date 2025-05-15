import { Router } from "express";
import { BookController } from "../controller/book.controller.js";

const bookRouter = Router();

bookRouter.get("/book", BookController.getLibros);
bookRouter.post("/book",BookController.crearLibro);



export { bookRouter };
