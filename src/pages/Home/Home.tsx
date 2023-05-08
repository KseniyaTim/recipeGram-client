import { FC, useEffect, useState } from "react";

//components
import GenericRecipe from "../../components/GenericRecipe/GenericRecipe";

//consts
import { RECIPES_TEST } from "../../consts/recipes";
import { IGenericRecipe } from "../../components/GenericRecipe/IGenericRecipe";
import axios from "axios";

const Home: FC = () => {
  const [recipes, setRecipes] = useState<IGenericRecipe[]>([]);

  useEffect(() => {
    try {
      axios.get<IGenericRecipe[]>("http://localhost:5000/recipe/all").then(({ data }) => {
        console.log("ok");
        setRecipes(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="wrapper">
      {RECIPES_TEST.map((element, index) => (
        <GenericRecipe key={index} {...element} />
      ))}
    </div>
  );
};

export default Home;
