
import { DataExternaService } from "../services/dataexterna.service.js"

export const DataExternaController = {
    descargarCSV:async(req,res)=>{
    try {
    const respuesta = await DataExternaService.servicioDescargaCSV();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
    },

    
}