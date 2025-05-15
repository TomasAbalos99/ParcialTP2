import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fetch from "node-fetch";


export const DataExternaService = {
	servicioDescargaCSV: async () => {
		try {
			const response = await fetch(
				"https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv",
			);

			if (!response.ok) {
				throw new Error(
					`Error al descargar el archivo: ${response.statusText}`,
				);
			}

			const data = await response.text();

			const filePath = path.resolve(process.cwd(), "src", "db", "descarga.csv");

			await fs.writeFile(filePath, data, "utf-8");

			return { mensaje: "CSV descargado y guardado correctamente." };
		} catch (error) {
			console.error(
				"Error al descargar o guardar el archivo CSV",
				error.message,
			);
			throw new Error("Error al descargar o guardar el archivo CSV");
		}
	},

	
};
