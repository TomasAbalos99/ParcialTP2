import { Router } from "express";
import { BookController } from "../controller/book.controller.js";

const bookRouter = Router();

bookRouter.get("/book", BookController.getLibros);
bookRouter.post("/book",BookController.crearLibro);
bookRouter.get("/book/:id",BookController.getLibro);
bookRouter.delete("/book/:id",BookController.deleteLibro);
bookRouter.put("/book/:id",BookController.actualizarLibro);



export { bookRouter };
