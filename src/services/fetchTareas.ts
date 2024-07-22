import { TareaTypeApi } from "@/types/TareaTypes";
import axios from "axios";

export const fetchTareas = async (): Promise<TareaTypeApi[]> => {

    try {

        const apiUrl = process.env.NEXT_PUBLIC_API;
        
        if (!apiUrl) {
            throw new Error("La variable de entorno NEXT_PUBLIC_API no está definida.");
        }
        // Se envía una solicitud GET al servidor para obtener todas las tareas.
        const respuesta = await axios.get(`${apiUrl}/api/tareas`)

        // Se extrae la lista de tareas del cuerpo de la respuesta.
        const { data: { res } } = respuesta;

        // Se devuelve la lista de tareas obtenidas.
        return res

    } catch (error: any) {
        let errorMensaje = 'Error desconocido';

        if (axios.isAxiosError(error)) {
            if (error.response) {
                errorMensaje = `Error ${error.response.status}: ${error.response.statusText}`;
            } else if (error.request) {
                // La petición fue hecha pero no se recibió respuesta
                errorMensaje = 'No se recibió respuesta del servidor';
            } else {
                // Algo pasó al preparar la petición
                errorMensaje = error.message;
            }
        } else {
            // Error no relacionado con Axios
            errorMensaje = 'Error desconocido:';
        }

        return []
    }
}