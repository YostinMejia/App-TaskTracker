"use client"

import { useEliminarTarea } from "@/hooks/useEliminarTarea";
import { TareaTypeApi } from "@/types/TareaTypes";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";


/**
 * Componente para mostrar una lista de tareas y permitir la eliminación de cada una.
 * 
 * Este componente recibe una lista de tareas y muestra cada tarea en una lista. 
 * Proporciona un botón para eliminar cada tarea, que al hacer clic elimina la tarea 
 * correspondiente y recarga la página para mostrar la lista actualizada de tareas.

 * */
export default function TareaUl({ tareaLista }: { tareaLista: TareaTypeApi[] }) {
    //Hook para eliminar las tareas    
    const eliminarTarea = useEliminarTarea()

    const router = useRouter();

    const handleClick = async (id: string) => {
        // elimina la tarea y maneja los errores que puedan ocurrir
        await eliminarTarea(id)
        console.log("Ya se eliminó la vuelta");
        
        //carga nuevamente esta página
        router.refresh()
    }


    return (
        <ul>
            {tareaLista.map((tarea: TareaTypeApi, index: number) => (                
                <li key={index} >
                    <h2>{tarea.titulo}</h2>
                    <p>{tarea.descripcion}</p>
                    <p>Creado: {tarea.fechaInicializacion}</p>
                    <p>Finalización: {tarea.fechaInicializacion}</p>
                    <Button text="Eliminar tarea" onClick={() => handleClick(tarea.id!)} />
                </li>
            ))}

        </ul>
    )
}