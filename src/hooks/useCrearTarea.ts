import { postTarea } from "@/services/postTarea";
import { TareaTypeApi } from "@/types/TareaTypes";

/**
 * Hook personalizado para crear una tarea.
 * 
 * Este hook utiliza Axios para enviar una solicitud HTTP DELETE al servidor para eliminar una tarea específica
 * basada en el ID proporcionado. Maneja tanto los errores de la API como los errores generales.
 * 
 */
export function useCrearTarea() {

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

        await postTarea(tarea);

    }

    return crearTarea
}
