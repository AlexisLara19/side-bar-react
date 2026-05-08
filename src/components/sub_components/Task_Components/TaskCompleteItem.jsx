

{/* Elementos de tabla Tareas Completadas  */}
{/* Titulo / Proyecto / Categoria / Fecha de Finalizacion / Boton de editar reporte / Boton de ver reporte / Boton de mas opciones */}

const TaskCompleteItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center">{titulo}</td>
            <td>{proyecto}</td>
            <td><span className="bg-[var(--yellow-line)]">{categoria}</span></td>
            <td>{fecha}</td>
            <td className="justify-center gap-x-4.5 pl-10">
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