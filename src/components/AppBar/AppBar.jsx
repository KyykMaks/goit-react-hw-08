import { useAuth } from "../hooks/useSel"
import * as css from "../App.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export const AppBar = () => {
    const { isSelectorLog } = useAuth();
    return (
        <header className={css.header}>
            <Navigation/>
            {isSelectorLog ? <UserMenu/>:<AuthNav/>}
        </header>
    )
}
