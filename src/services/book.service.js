import { BookRepository } from "../repository/book.repository.js";
import {Book} from "../model/book.js"

export const BookService = {
	servicioBusquedaTodos: () => {
		const libros = BookRepository.getAll();
		return libros;
	},
	servicioCreacion:(libro)=>{

		const libroModelo = new Book(
			 crypto.randomUUID().toString(),
 			 libro.autor,
 			 libro.titulo,
  
				);

		BookRepository.crear(libroModelo);
		return modelLibro;
	}
};
