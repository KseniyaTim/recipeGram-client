import { FC } from "react";

//components
import GenericCard from "../../components/GenericCard/GenericCard";


import { RECIPES_TEST } from "../../consts/recipes";

const Home: FC = () => {
  return (
    <div className="wrapper">
      {RECIPES_TEST.map((element, index) => (
        <GenericCard
          key={index}
          name={element.name}
          img={element.img}
          userName={element.userName}
          ingredients={element.ingredients}
          likes={element.likes}
          recipeId={element.recipeId}
        />
      ))}
    </div>
  );
};

export default Home;
