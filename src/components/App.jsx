/** @format */

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations.js";
import Login from "../pages/LoginPage.jsx";
// import { lazy } from "react";
// import { Route } from "react-router-dom";
// import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import Layout from "./Layout/Layout";
// import Register from "../pages/RegistrationPage.jsx";


// const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
// const LoginPage = lazy(() => import("../pages/LoginPage"));
// const HomePage = lazy(() => import("../pages/HomePage"));
// const ContactsPage = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

return (
  <>
  <Login/>
  </>
)
}

{/* //     <Route path="/" element={<Layout />}>
//     <Route index element={<HomePage />} />
//         <Route */}
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/tasks"
//               component={<RegistrationPage />}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
//           }
//         />
//       </Route>
     

export default App;