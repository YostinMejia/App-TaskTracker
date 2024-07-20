import { NextRequest} from "next/server"
import { TareaService } from "../application/services/TareaService"
import { TareaPrismaNeonRepository } from "../infrastructure/TareaPrismaNeonRespository"

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        
        const tareaService = new TareaService(new TareaPrismaNeonRepository())
        // Se obtienen la tarea
        const tarea = await tareaService.buscarPorId(params.id)

        // Devuelve una respuesta JSON con la tarea e indica que fue exitosa (ok) la solicitud
        return Response.json({ res:tarea })
    } catch (error: any) {

        //indica que no fue exitosa (ok = false) la solicitud y retorna el nombre del error
        return Response.json({ "error":{nombre:error.name,mensaje:error.message}},{status:500})
    }
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        
        const tareaService = new TareaService(new TareaPrismaNeonRepository())
        // Se obtienen la tarea
        const tarea = await tareaService.eliminarTarea(params.id)

        // Devuelve una respuesta JSON con la tarea e indica que fue exitosa (ok) la solicitud
        return Response.json({  res: tarea })
    } catch (error: any) {

        //indica que no fue exitosa (ok = false) la solicitud y retorna el nombre del error
        return Response.json({ "error":{nombre:error.name,mensaje:error.message}},{status:500})
    }
}