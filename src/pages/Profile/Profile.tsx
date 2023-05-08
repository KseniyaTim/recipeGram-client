import { FC } from "react";

//consts
import { USER_TEST } from "../../consts/userTest";

//components
import MiniRecipe from "../../components/MiniRecipe/MiniRecipe";

//css
import "./Profile.css";

const Profile: FC = () => {
  return (
    <div className="profileWrapper">
      <div>
        <img className="profilePic" src={USER_TEST.img} />
        <div className="userName">
          {USER_TEST.firstName} {USER_TEST.lastName}
        </div>
      </div>

      <div>
        <div className="recipesContainer"> Your Recipes Are:</div>
        {USER_TEST.recipes.map((element, index) => (
          <MiniRecipe key={index} {...element} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
