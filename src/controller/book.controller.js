import { BookService } from "../services/book.service.js";

export const BookController = {
	getLibros: async (req, res) => {
		const libros = await BookService.servicioBusquedaTodos();
		if (!libros) {
			res.json({
				message: "no hay libros",
			});
		}
		res.json(libros);
	},
	crearLibro:async(req,res)=>{
     const  {libro}  = req.body;
		try {
			const libroResponse = await BookService.servicioCreacion(libro);
			res.status(200).json({
				message: "Success",
			});
			return;
		} catch (e) {
			console.log({ message: e.message, message: "algo salio mal" });
			res.status(404).json({
				message: "No se pudo crear el libro",			
			});
			return;
		}

    }
};
