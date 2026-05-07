import SidebarItem from "./sub_components/SideBarItem"

const MenuLateral = ({ isOpen, onToggle })=>{

    return (
        <>
            <aside
                id="sidebar"
                className={`${isOpen ? "w-64" : "w-20"} bg-[var(--main-hard)] pt-5 transition-all duration-300 overflow-hidden`}
            >
                <ul className="flex flex-col gap-y-4.5">
                    <li className={`${isOpen ? "justify-end pr-5" : "justify-center"} flex`}>
                        <button
                            onClick={onToggle}
                            id="toggle-btn"
                            className="flex h-10 w-10 items-center justify-center"
                            type="button"
                        >
                            <i className={`${isOpen ? "" : "rotate-180"} fa-solid fa-bars flex text-[25px] text-[var(--text-color-menu)] transition-transform duration-300 hover:text-[var(--text-color-menu-hover)]`}></i>
                        </button>
                    </li>
                    <SidebarItem
                        isOpen={isOpen}
                        icon="fa-solid fa-user"
                        label="Perfil"
                    ></SidebarItem>
                    <SidebarItem
                        isOpen={isOpen}
                        to="/resumen"
                        icon="fa-regular fa-chart-bar"
                        label="Resumen"
                    ></SidebarItem>
                    <SidebarItem
                        isOpen={isOpen}
                        to="/tareas"
                        icon="fa-solid fa-list-check"
                        label="Tareas"
                    ></SidebarItem>
                    <SidebarItem
                        isOpen={isOpen}
                        to="/notificaciones"
                        icon="fa-regular fa-clipboard"
                        label="Reportes"
                    ></SidebarItem>
                    <SidebarItem
                        isOpen={isOpen}
                        to="/mensajes"
                        icon="fa-solid fa-gear"
                        label="Administrador"
                    ></SidebarItem>
                </ul>

            </aside>
        </>
    )
}


export default MenuLateral
