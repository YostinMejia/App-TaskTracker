import axios from "axios";
import dotenv from "dotenv"
dotenv.config()
/**
 * Hook personalizado para eliminar una tarea.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP DELETE al servidor para eliminar una tarea específica
 * basada en el ID proporcionado. Maneja tanto los errores de la API como los errores generales.
 * 
 */
export function useEliminarTarea() {

    const eliminarTarea = async (id: string): Promise<void> => {
        try {

            // Se envía una solicitud DELETE al servidor para eliminar la tarea que tiene el mismo id.
            const respuesta = await axios({
                method: "delete",
                url: `${process.env.API_DOMAIN}/api/tareas/${id}`,
            })
        }
        catch (e) {
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

    return eliminarTarea
}