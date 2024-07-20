import TareaUl from "@/containers/TareaUl";
import { useObtenerTareas } from "@/hooks/useObtenerTareas";

export default async function Home() {

    //Hook para obtener todas las tareas
    const obtenerTareas = useObtenerTareas()
    const tareas = await obtenerTareas()

    return (
        <main>
            <TareaUl tareaLista={tareas} />
        </main>
    )
}