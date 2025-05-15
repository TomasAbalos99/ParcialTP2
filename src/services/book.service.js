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
	},
	servicioBusquedaIndividual:(id)=>{
		const idBuscada = BookRepository.getById(id);
		if(!idBuscada) return null;
		return idBuscada;

	},
	servicioDeleteLibro:(id)=>{
		const libro = BookRepository.deletedById(id);
		if(!libro) return null;
		return libro;

	}
};
