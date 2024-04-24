/** @format */

import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <nav>
      <NavLink className={getNavLinkClassNames} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
