import { TareaTypeApi } from "@/types/TareaTypes";
import axios from "axios";

export const postTarea = async (datos: TareaTypeApi): Promise<void> => {

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API;

        if (!apiUrl) {
            throw new Error("La variable de entorno NEXT_PUBLIC_API no está definida.");
        }
        
        // Se utiliza la api para que esta se encargue de almacenar el objeto
        const respuesta = await axios({
            method: "post",
            url: `${apiUrl}/api/tareas`,
            data: datos
        })

    } catch (error: any) {
        let errorMensaje;
        
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
        }
        /*
        si anteriormente se definió un mensaje de error, 
        entonces este es el que se va a mostrar, de lo contrario, se muestra  "error al intentar elimar el" 
        
        */
        throw new Error(!!errorMensaje ? errorMensaje : "error al intentar craear la tarea");
    }

}