import { FC } from "react";

//components
import GenericRecipe from "../../components/GenericRecipe/GenericRecipe";

//consts
import { RECIPES_TEST } from "../../consts/recipes";

const Home: FC = () => {
  return (
    <div className="wrapper">
      {RECIPES_TEST.map((element, index) => (
        <GenericRecipe key={index} {...element} />
      ))}
    </div>
  );
};

export default Home;
