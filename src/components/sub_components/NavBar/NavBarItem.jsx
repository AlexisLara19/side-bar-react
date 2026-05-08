import { Link } from "react-router-dom";

const NavBarItem = ({id, to="/",label}) => {
  return (
      <li key={id} className="shrink-0 hover:bg-[var(--tertiary-color)]">
        {/* <a href="#" title="" className="flex hover:text-primary-700 ">
            {label}
        </a> */}

        <Link
        to={to}
        className="flex hover:text-primary-700"
        >
        <p>
          {label}
        </p>
      </Link>

    </li>
  );
};

export default NavBarItem;