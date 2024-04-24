/** @format */

import { NavLink } from "react-router-dom";
import * as css from "../App.css";
import clsx from "clsx";
import { useAuth } from "../hooks/useAuth";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const { isSelectorsLog } = useAuth();

  return (
    <nav>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      {isSelectorsLog && (
        <NavLink className={getNavLinkClassNames} to="/tasks">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
