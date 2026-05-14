import { Link } from "react-router-dom";

const NavBarItem = ({id, to="/",label}) => {
  return (
      <li key={id} class="shrink-0 hover:bg-[var(--tertiary-color)] p-2">
        {/* <a href="#" title="" className="flex hover:text-primary-700 ">
            {label}
        </a> */}

        <Link
        to={to}
        className=""
        >
        <p>
          {label}
        </p>
      </Link>

    </li>
  );
};

export default NavBarItem;