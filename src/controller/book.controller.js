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
		return
	},
	crearLibro:async(req,res)=>{
     const  libro  = req.body;
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
			console.log(e);
			return;
		}

    },

	getLibro:async(req,res)=>{
		const {id} = req.params;
		const libro = await BookService.servicioBusquedaIndividual(id);
		if (!libro) {
			res.status(404).json({
				payload: null,
				message: "No Libro",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			ok: true,
		});
		return;
	},
	deleteLibro:async(req,res)=>{
		const {id} = req.params
		const libro = await BookService.servicioDeleteLibro(id);
		if (!libro) {
			res.status(404).json({
				payload: null,
				message: "No se pudo borrar el Libro",
				ok: false,
			})
	} else res.json({
		message:"Libro borrado"
	})
},
	actualizarLibro:async(req,res)=>{
		try {
		const body = req.body;
		const { id } = req.params; // ✅ corregido: era res.params (incorrecto)

		const libroActualizado = await BookService.servicioActualizacion(body, id);

		if (!libroActualizado) {
			return res.status(404).json({ message: "Libro no encontrado o no se pudo actualizar." });
		}

		res.status(200).json(libroActualizado);
	} catch (error) {
		console.error("Error al actualizar el libro:", error);
		res.status(500).json({ message: "Error interno del servidor." });
		console.log(error);
	}
}


     
}



