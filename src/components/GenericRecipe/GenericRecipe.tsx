import { FC } from "react";

//mui
import { Card } from "@mui/material";

//interface
import { IGenericRecipe } from "./IGenericRecipe";

//style
import "./GenericRecipe.css";

const GenericRecipe: FC<IGenericRecipe> = ({
  img,
  ingredients,
  name,
  userName,
  instructions,
}) => {
  return (
    <div className="cardWrapper">
      <Card sx={{ maxWidth: "50rem" }}>
        <div className="cardElementsContainer">
          <div className="mainHeader">{name}</div>
          <img src={img} className="image" />
          <div className="list">
            {ingredients.map((element, index) => (
              <div key={index}>- {element}</div>
            ))}
          </div>
          <div className="list">
            {instructions.map((instruction, index) => (
              <div key={index}>
                {index + 1}) {instruction}
              </div>
            ))}
          </div>
          <div>Made by: {userName}</div>
        </div>
      </Card>
    </div>
  );
};

export default GenericRecipe;
