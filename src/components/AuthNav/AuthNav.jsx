import { NavLink } from "react-router-dom";
import * as css from "../App.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const AuthNav = () =>{

  return(
    <nav>
        <NavLink className={getNavLinkClassNames} to='/register'>
            Register
        </NavLink>
            <NavLink className={getNavLinkClassNames} to='/login'>
                Log In
            </NavLink>
    </nav>
  )
}

export default AuthNav;