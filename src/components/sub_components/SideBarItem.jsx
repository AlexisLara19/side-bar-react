import { Link } from "react-router-dom";

const SidebarItem = ({ to = "/", icon, label, isOpen }) => {
  return (
    <li>
      <Link
        to={to}
        className={`${isOpen ? "justify-start gap-x-4.5 pl-10" : "justify-center"} group text-[18px] font-semibold flex items-center py-4 hover:bg-[var(--secondary-soft)] text-[var(--text-color-menu)]`}
      >
        <i className={`${icon} text-[25px] text-[var(--text-color-menu)] group-hover:text-[var(--text-color-menu-hover)]`}></i>
        <p className={`${isOpen ? "block" : "hidden"} group-hover:text-[var(--text-color-menu-hover)] group-hover:font-bold`}>
          {label}
        </p>
      </Link>
    </li>
  );
};

export default SidebarItem;
