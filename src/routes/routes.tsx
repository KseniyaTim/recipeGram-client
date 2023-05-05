// components
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import AddRecipe from "../pages/AddRecipe/AddRecipe";

//routes 
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, PROFILE_ROUTE, ADD_RECIPE_ROUTE} from "../consts/routeConsts";

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
  {
    path: PROFILE_ROUTE,
    component: Profile
  },
  {
    path: ADD_RECIPE_ROUTE,
    component: AddRecipe
  }

];
export default RouteMaster;
