import { FC } from "react";
//routing
import { useHistory } from "react-router-dom";
import { HOME_ROUTE } from "../../consts/routeConsts";

//css
import "./Navbar.css";

const Navbar: FC = () => {

  const history = useHistory()
  return (
    <>
      <div className="navbarwWrapper">
        <div className="mainTitle" onClick={() => {history.push(HOME_ROUTE)}}>RecipeGram</div>
        <div>
          <span className="material-symbols-outlined icon">add</span>
          <span className="material-symbols-outlined icon">account_circle</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
