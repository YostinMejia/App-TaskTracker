import { fetchTareas } from "@/services/fetchTareas";

/**
 * Hook personalizado para obtener la lista de todas las tareas.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP GET al servidor para obtener todas las tareas.
 * Maneja tanto los errores de la API como los errores generales.
*/
export function useObtenerTareas() {

    return fetchTareas
}