/** @format */

import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {isRefreshing.name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};

export default UserMenu;
