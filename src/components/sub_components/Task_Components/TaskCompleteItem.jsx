

{/* Elementos de tabla Tareas Completadas  */}
{/* Titulo / Proyecto / Categoria / Fecha de Finalizacion / Boton de editar reporte / Boton de ver reporte / Boton de mas opciones */}

const TaskCompleteItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center px-0.5">{titulo}</td>
            <td className="px-0.5" >{proyecto}</td>
            <td className="px-0.5" ><span className="bg-[var(--green-line)]">{categoria}</span></td>
            <td className="px-2">{fecha}</td>
            <td className="flex flex-row justify-center gap-x-0.5 p-1.5">
                {/* Editar reporte */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-regular fa-pen-to-square text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                {/* Ver reporte */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-regular fa-eye text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                {/* Mas Opciones */}
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-ellipsis-vertical text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
            </td>
        
        </>

    )
}

export default TaskCompleteItem;