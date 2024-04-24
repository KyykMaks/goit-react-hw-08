/** @format */

import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { isSelecterLog } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {isSelecterLog.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}></button>
    </div>
  );
};

export default UserMenu;
