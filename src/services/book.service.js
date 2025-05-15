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
 			 libro.author,
 			 libro.title,
  
				);

		BookRepository.crear(libroModelo);
		return libroModelo;
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

	},
	servicioActualizacion:async(body,id)=>{
		const existe = await BookRepository.getById(id);
		if(!existe) return null;
		const libro = {
			...existe,
			id: id,
			author: body.author,
			title: body.title,
			
		}
		await BookRepository.actualizarLibro(libro);
		return libro;
	}
};
