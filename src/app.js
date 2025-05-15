import express from "express";
import { config } from "../config/config.js";
import { bookRouter } from "./routes/book.router.js";
import { dataExternaRouter } from "./routes/data.router.js";
import morgan from "morgan";
const app = express();
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());

app.use("/api", bookRouter);
app.use("/api",dataExternaRouter);

app.listen(config.PORT, () => {
	const mensaje = "Servidor levantado";
	console.log(mensaje);
});
