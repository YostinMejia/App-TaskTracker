import { PrismaClient } from "@prisma/client";
import { Tarea } from "../domain/TareaEntity";
import { ITareaRepository } from "../domain/TareaRepository";
import prisma from "@/app/api/lib/prismadb";


export class TareaPrismaNeonRepository implements ITareaRepository {
    private neonDb: PrismaClient
    constructor() {
        this.neonDb = prisma
    }

    async crearTarea(tarea: Tarea): Promise<Tarea> {
        return await this.neonDb.tarea.create({ data: tarea })
    }

    async obtenerTodas(): Promise<Tarea[]> {
        return await this.neonDb.tarea.findMany()
        
    }

    // async actualizarTareaPorId(tarea: Tarea): Promise<Tarea> {
        
    // }

    async buscarPorId(id: string): Promise<Tarea> {

        const tareaJson = await this.neonDb.tarea.findUnique({
            where: {
                id: id
            }
        })
        //Si no se encuentran tareas prisma retorna un null, por lo tanto se lanza un error
        if (!tareaJson) {
            throw Error("ID de la tarea incorrecto")
        }

        return tareaJson
    }

    async eliminarTareaPorId(id: string): Promise<Tarea> {
        return await this.neonDb.tarea.delete({
            where: {
                id: id
            }
        })
    }
}