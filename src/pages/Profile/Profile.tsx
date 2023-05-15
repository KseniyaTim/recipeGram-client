import { FC, useEffect, useState } from "react";

//interface
import { IProfile } from "./IProfile";

//axios
import axios from "axios";

//routing
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../../consts/routeConsts";

//components
import MiniRecipe from "../../components/MiniRecipe/MiniRecipe";

//css
import "./Profile.css";

const Profile: FC = () => {
  const [user, setUser] = useState<IProfile>({} as IProfile);

  const history = useHistory();


  useEffect(() => {
    const codedId = localStorage.getItem("userIdToken");
    if (!codedId) {
      history.push(LOGIN_ROUTE);
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${codedId}`;
    codedId && console.log(codedId);
    if (codedId) {
      axios.get<IProfile>("http://localhost:5000/user/get").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <div className="profileWrapper">
      <div>
        <img
          className="profilePic"
          src={
            user.img
              ? user.img
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
        />
        <div className="userName">
          {user.firstName} {user.lastName}
        </div>
        <div>{user.age} years old</div>
      </div>

      <div>
        <div className="recipesContainer"> Your Recipes Are:</div>
        {user.recipes?.map((element, index) => (
          <MiniRecipe key={index} {...element} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
