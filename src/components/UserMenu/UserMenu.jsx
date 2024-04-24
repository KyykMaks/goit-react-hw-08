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
      <button type="button" onClick={() => dispatch(logOut())}></button>
    </div>
  );
};

export default UserMenu;
