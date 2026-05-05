const MenuLateral = ()=>{

    return (
        <>
            <aside className="bg-[#FFFDEA] col-span-2 pt-5">
                <ul className="flex flex-col gap-y-4.5">
                    <li>
                        <a href="" className="text-[18px] font-semibold flex items-center gap-x-4 pl-10 py-[3]">
                            <i className="fa-solid fa-user text-[25px] text-[#2050e4]"></i>
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[18px] font-semibold flex items-center gap-x-4 pl-10 py-[3]">
                            <i className="fa-regular fa-chart-bar text-[25px] text-[#2050e4]"></i>
                            Servicios Activos
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[18px] font-semibold flex items-center gap-x-4 pl-10 py-[3]">
                            <i className="fa-regular fa-calendar text-[25px] text-[#2050e4]"></i>
                            Historicos
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[18px] font-semibold flex items-center gap-x-4 pl-10 py-[3]">
                            <i className="fa-regular fa-flag text-[25px] text-[#2050e4]"></i>
                            Notificaciones
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-[18px] font-semibold flex items-center gap-x-4 pl-10 py-[3]">
                            <i className="fa-regular fa-comments text-[25px] text-[#2050e4]"></i>
                            Mensajes
                        </a>
                    </li>
                </ul>

            </aside>
        </>
    )
}

export default MenuLateral