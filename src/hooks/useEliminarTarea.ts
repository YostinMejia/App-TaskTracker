import { deleteTarea } from "@/services/deleteTarea";

/**
 * Hook personalizado para eliminar una tarea.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP DELETE al servidor para eliminar una tarea específica
 * basada en el ID proporcionado. Maneja tanto los errores de la API como los errores generales.
 * 
 */
export function useEliminarTarea() {

    return deleteTarea
}