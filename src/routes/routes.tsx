// components
import Home from "../pages/Home/Home";
//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, } from "../consts/routeConsts";

const RouteMaster = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  // {
  //   path: LOGIN_ROUTE,
  //   component: Login,
  // },
  // {
  //   path: REGISTER_ROUTE,
  //   component: Register,
  // },

];
export default RouteMaster;
