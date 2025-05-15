import express from "express";
import { config } from "../config/config.js";
import { bookRouter } from "./routes/book.router.js";
import { dataExternaRouter } from "./routes/data.router.js";

const app = express();
app.use(express.json());

app.use("/api", bookRouter);
app.use("/api",dataExternaRouter);

app.listen(config.PORT, () => {
	const mensaje = "Servidor levantado";
	console.log(mensaje);
});
