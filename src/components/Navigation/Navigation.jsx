/** @format */

import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from "clsx";
import { useAuth } from "../hooks/useAuth";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClassNames} to="/tasks">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
