import { TareaTypeApi } from "@/types/TareaTypes";
import axios from "axios"
import dotenv from "dotenv"
dotenv.config()
/**
 * Hook personalizado para obtener la lista de todas las tareas.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP GET al servidor para obtener todas las tareas.
 * Maneja tanto los errores de la API como los errores generales.
*/
export function useObtenerTareas() {

    const obtenerTareas = async (): Promise<TareaTypeApi[]> => {
        try {
            // Se envía una solicitud GET al servidor para obtener todas las tareas.
            const respuesta = await axios.get(`${process.env.API_DOMAIN}/api/tareas/`)

            // Se extrae la lista de tareas del cuerpo de la respuesta.
            const { data: { res } } = respuesta;

            // Se devuelve la lista de tareas obtenidas.
            return res

        } catch (e) {
            let errorMensaje;

            // Verifica si el error es un error de Axios.
            if (axios.isAxiosError(e)) {

                /*
                si el error proviene de la api esta retorna un objeto llamado error
                con el nombre y mensaje de este
                */
                if (!e.response?.data.error) {
                    errorMensaje = `${e.response?.status}: ${e.response?.statusText}`
                }

                /*si el error no es de la api entonces obtenemos el error de axios status y staturText */
                errorMensaje = `${e.response?.status}: ${e.response?.statusText}`;
            }
            /*
            si anteriormente se definió un mensaje de error, 
            entonces este es el que se va a mostrar, de lo contrario, se muestra  "error al intentar elimar el" 
            
            */
            throw new Error(!!errorMensaje ? errorMensaje : "error al intentar elimar el");
        }


    }

    return obtenerTareas
}