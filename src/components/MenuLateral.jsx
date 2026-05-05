const MenuLateral = ()=>{

    return (
        <>
            <aside className="bg-green-300 col-span-2 pt-5">
                <ul className="flex flex-col gap-y-4.5">
                    <li>
                        <a href="">
                            <i class="fa-solid fa-user"></i>
                            Perfil
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-chart-bar"></i>
                            Servicios Activos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-calendar"></i>
                            Historicos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-flag"></i>
                            Notificaciones
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-comments"></i>
                            Mensajes
                        </a>
                    </li>
                </ul>

            </aside>
        </>
    )
}

export default MenuLateral