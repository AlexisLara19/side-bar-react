import TaskGoingItem from './TaskGoingIntem'

const TaskGoingTable = () => {
    return (
        <>
            <div className='mx-8 rounded-lg py-3 px-2 bg-white
                            border border-separate border-[var(--orange-line)]
                            shadow-base-300/20 shadow-sm text-[var{--main-hard}]'>
            <table class="min-w-full table-auto 
                          border-spacing-y-2 border-spacing-x-5 gap-x-4
                          ">
                         
                <thead>
                    {/* <tr class="border-0 bg-amber-700 *:first:rounded-s-md *:last:rounded-e-md"> */}
                    <tr class="border-0 *first:rounded-s-md *:last:rounded-e-md">
                        <th>Titulo </th>
                        <th>Proyecto </th>
                        <th>Categoria </th>
                        <th>Fecha </th>
                        <th>Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-[var(--main-soft)]"><TaskGoingItem 
                            titulo={"Adaptacion Valvula Y"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"04/03/26"}></TaskGoingItem></tr>
                    <tr class="hover:bg-[var(--main-soft)]"><TaskGoingItem 
                            titulo={"Actualizacion de programa Fuga Burda"} 
                            proyecto={"LTR P/Q"} 
                            categoria={"Intervencion"} 
                            fecha={"09/03/26"}></TaskGoingItem></tr>

                    <tr class="hover:bg-[var(--main-soft)]"><TaskGoingItem 
                            titulo={"Integracion Dispositivo 8"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"24/03/26"}></TaskGoingItem></tr>

                    <tr class="hover:bg-[var(--main-soft)]"><TaskGoingItem 
                            titulo={"Integracion de Mesa de Sellos"} 
                            proyecto={"LTR Q"} 
                            categoria={"Integracion"} 
                            fecha={"09/04/26"}></TaskGoingItem></tr>
                    
                </tbody>
            </table>
            </div>
        </>
    )
}

export default TaskGoingTable 