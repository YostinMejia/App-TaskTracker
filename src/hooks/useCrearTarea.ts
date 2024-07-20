import { TareaTypeApi } from "@/types/TareaTypes";
import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

/**
 * Hook personalizado para crear una tarea.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP DELETE al servidor para eliminar una tarea específica
 * basada en el ID proporcionado. Maneja tanto los errores de la API como los errores generales.
 * 
 */
export function useCrearTarea() {

    const apiPostTarea = async (datos: TareaTypeApi): Promise<void> => {

        try {

            // Se utiliza la api para que esta se encargue de almacenar el objeto
            const respuesta = await axios({
                method: "post",
                url: `${process.env.API_DOMAIN}/api/tareas/`,
                data: datos
            })

        } catch (e) {
            let errorMensaje;

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

    const crearTarea = async (tareaFormData: FormData, fechaInicio: Date, fechaFinal: Date): Promise<void> => {

        // lógica para guardar la tarea

        /* se obtienen los datos que el usuario ingreso en el formulario
            como las fechas son obtenidas mediante un componente externo, 
            se usa un useState para poder almacenar su valor y por ello se solictan como otro parametro
        */
        const titulo = tareaFormData.get("titulo")
        const descripcion = tareaFormData.get("descripcion")

        //Si alguno de los valores en el formulario es falsy value
        if (!titulo || !descripcion || !fechaInicio || !fechaFinal) {
            throw new Error("Todos los campos para guardar la tarea son obligatorios")
        }

        if (fechaInicio > fechaFinal) {
            throw new Error("La fecha de creación no puede ser mayor a la fecha de finalización")
        }

        const tarea: TareaTypeApi = {
            titulo: titulo.toString(),
            descripcion: descripcion.toString(),
            fechaInicializacion: fechaInicio,
            fechaFinalizacion: fechaFinal
        }

        await apiPostTarea(tarea);

    }

    return crearTarea
}
