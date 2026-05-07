
const TaskFinishItem = ({titulo,proyecto,categoria,fecha}) => {
    return(
        <>
            <td className="justify-center">{titulo}</td>
            <td>{proyecto}</td>
            <td><span className="bg-[var(--yellow-line)]">{categoria}</span></td>
            <td>{fecha}</td>
            <td className="justify-center gap-x-4.5 pl-10">
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-regular fa-pen-to-square text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-regular fa-eye text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
                <button class="btn btn-circle btn-text btn-sm cursor-pointer" aria-label="Action button">
                    <i class="fa-solid fa-ellipsis-vertical text-[20px] hover:text-[var(--secondary-soft)]"></i></button>
            </td>
        
        </>

    )
}

export default TaskFinishItem;