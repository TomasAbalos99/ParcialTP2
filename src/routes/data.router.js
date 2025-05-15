import { Router } from "express";
import { DataExternaController } from "../controller/dataexterna.controller.js";

const dataExternaRouter = Router();

dataExternaRouter.get("/data",DataExternaController.descargarCSV)

export{dataExternaRouter}