//components
import Navbar from "./components/Navbar/Navbar";

// routing
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";

//consts
import { HOME_ROUTE } from "./consts/routeConsts";

//css
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          {RouteMaster.map((routeElement, index) => (
            <Route
              key={index}
              path={routeElement.path}
              render={() => <routeElement.component />}
            />
          ))}
          <Redirect from="*" to={HOME_ROUTE} />
        </Switch>
    </>
  );
}

export default App;
