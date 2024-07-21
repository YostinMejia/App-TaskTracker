
import { fetchTareas } from "@/services/fetchTareas";
import TareaUl from "@/containers/TareaUl";


export default async function Home() {
    
    //Llama al servicio que obtiene y retorna las tareas
    const tareas = await fetchTareas()
    
    if (!tareas || tareas.length === 0) {
        return <p>No hay tareas</p>; 
    }
    
    return (
        <main>
            <TareaUl tareaLista={tareas} />
        </main>
    )
}