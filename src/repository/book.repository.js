import { JsonHandler } from "../utils/JsonManager.js";

export const BookRepository = {
	getAll: async () => {
		const libros = await JsonHandler.read();
		return libros;
	},
	crear:async(libro)=>{
		const libros = await JsonHandler.read();
		libros.push(libro);
		try {
			await JsonHandler.write(libros);
		} catch (e) {
			console.error({ message: e.message });
		}
		
	},
	getById:async(id)=>{
		const libros = await JsonHandler.read()
		if (!libros) return null;
		const libro = libros.find(libro => libro.id ===id);
		if(!libro)  return null;
		return libro;
	},
	deletedById:async(id)=>{
		const libros = JsonHandler.read();
		if(!libros) return null;
		const libro = libros.find(libro => libro.id ===id);
		if(!libro)return null;

		const libroResponse = libros.filter((libro) => libro.id !== id);
		try {
			await JsonHandler.write(ticketsResponse);
			return id;
		} catch (e) {
			return null;
		}
	}
};
