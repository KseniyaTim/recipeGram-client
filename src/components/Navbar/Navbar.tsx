import { FC } from "react";

//routing
import { useHistory } from "react-router-dom";
import { ADD_RECIPE_ROUTE, HOME_ROUTE, PROFILE_ROUTE } from "../../consts/routeConsts";

//css
import "./Navbar.css";

const Navbar: FC = () => {

  const history = useHistory()
  return (
    <>
      <div className="navbarwWrapper">
        <div className="mainTitle" onClick={() => {history.push(HOME_ROUTE)}}>RecipeGram</div>
        <div>
          <span className="material-symbols-outlined icon" onClick={() => {history.push(ADD_RECIPE_ROUTE)}}>add</span>
          <span className="material-symbols-outlined icon"  onClick={() => {history.push(PROFILE_ROUTE)}}>account_circle</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
