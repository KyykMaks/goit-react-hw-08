import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useSel";
import * as css from "../App.css";
import clsx from "clsx";


const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });

const Navigation = () =>{
  const { isSelectorsLog } = useAuth();

  return(
    <nav>
        <NavLink className={getNavLinkClassNames} to='/'>
            Home
        </NavLink>
        {isSelectorsLog &&(
            <NavLink className={getNavLinkClassNames} to='/contacts'>
                Contacts
            </NavLink>
        )}
    </nav>
  )
}

export default Navigation;