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
	}
};
