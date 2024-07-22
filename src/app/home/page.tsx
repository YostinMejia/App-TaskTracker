
import { fetchTareas } from "@/services/fetchTareas";
import TareaUl from "@/containers/TareaUl";


export default async function Home() {
    

    /* Necesito saber porque no hace get cada que se entra al home 
    y cada que se elimine una tarea  */


    //Llama al servicio que obtiene y retorna las tareas
    const tareas = await fetchTareas()

    if (!tareas || tareas.length === 0) {
        return <p>No hay tareas</p>; 
    }
    console.log("Ya se obtuvieron las tareas");
    
    return (
        <main>
            <TareaUl tareaLista={tareas} />
        </main>
    )
}