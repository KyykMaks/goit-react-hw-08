import { useAuth } from "../hooks/useAuth"
import css from './AppBar.module.css';
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header className={css.header}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/>:<AuthNav/>}
        </header>
    )
}
