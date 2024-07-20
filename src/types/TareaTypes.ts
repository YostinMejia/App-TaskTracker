/**
 * Tipo de datos que representa una tarea en la API.
 * 
 * Este tipo se utiliza para describir la estructura de una tarea que se maneja a través de la API. 
 * Incluye información básica sobre la tarea, como su identificación, título, descripción y fechas de inicio y finalización.
 * 
 */

export type TareaTypeApi = {
    id?: string
    titulo: string;
    descripcion: string;
    fechaInicializacion: Date;
    fechaFinalizacion: Date;
}
