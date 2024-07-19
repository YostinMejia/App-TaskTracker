import { Tarea } from "../../domain/TareaEntity";
import { ITareaRepository } from "../../domain/TareaRepository";

export class TareaService {
    constructor(private TareaRepository: ITareaRepository) { }

    async crearTarea(tarea: Tarea): Promise<Tarea> {
        return await this.TareaRepository.crearTarea(tarea)
    }
    async obtenerTodas(): Promise<Tarea[]> {
        return await this.TareaRepository.obtenerTodas()
    }

    async buscarPorId(id: string): Promise<Tarea | null> {
        return await this.TareaRepository.buscarPorId(id)
    }
    async eliminarTarea(id: string): Promise<Tarea | null> {
        return await this.TareaRepository.eliminarTareaPorId(id)
    }
}