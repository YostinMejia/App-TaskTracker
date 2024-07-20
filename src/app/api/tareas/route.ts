import { NextRequest, NextResponse } from "next/server";
import { Tarea } from "./domain/TareaEntity";
import { TareaService } from "./application/services/TareaService";
import { TareaPrismaNeonRepository } from "./infrastructure/TareaPrismaNeonRespository";

export const POST = async (req: NextRequest) => {
    try {
        const tareaService = new TareaService(new TareaPrismaNeonRepository())
        //Parsea el body de la solicitud
        const body = await req.json()

        // Crea una instancia de Tarea con los datos del cuerpo
        const tarea = Tarea.JSONAEntity(body)

        // Llama al método asincrónico para crear una nueva tarea
        const nuevaTarea = await tareaService.crearTarea(tarea)

        // Devuelve una respuesta JSON con la nueva tarea creada
        //e indica que fue exitosa (ok) la solicitud
        return Response.json({ ok: true, res: nuevaTarea })
    } catch (error: any) {

        //indica que no fue exitosa (ok = false) la solicitud y retorna el nombre del error
        return Response.json({ ok: false, "error":{nombre:error.name,mensaje:error.message}})
    }
}

export const GET = async () => {
    try {

        const tareaService = new TareaService(new TareaPrismaNeonRepository())
        //Se obtienen todas las tareas creadas
        const tareas = await tareaService.obtenerTodas()

        // Devuelve una respuesta JSON con todas las tareas
        // e indica que fue exitosa (ok) la solicitud
        return Response.json({ res: tareas })
    } catch (error: any) {

        //indica que no fue exitosa (ok = false) la solicitud y retorna el nombre del error
        return Response.json({ "error":{nombre:error.name,mensaje:error.message}},{status:500})
    }
}