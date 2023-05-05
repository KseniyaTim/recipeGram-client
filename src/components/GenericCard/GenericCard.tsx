import React, { FC } from "react";

//mui
import { Card, CardContent } from "@mui/material";

//interface
import { IGenericCard } from "./IGenericCard";

//style
import "./GenericCard.css";

const GenericCard: FC<IGenericCard> = ({
  img,
  ingredients,
  likes,
  name,
  userName,
  recipeId
}) => {
  return (
    <div className="cardWrapper">
      <Card sx={{ maxWidth: "50rem" }}>
        <CardContent>
          <div className="cardContainer">
            <div className="leftSide">
              <div className="title">{name}</div>
              <img src={img} className="image" />
              <div>Made by: {userName}</div>
              <div className="likes">
                <div className="like">{likes} likes</div>  
                <span className="material-symbols-outlined heart">favorite</span>
              </div>
            </div>
            <div className="rightSide">
              <div className="title">Ingredients:</div>
              <div>
                {ingredients.map((element, index) => (
                  <div key={index}>- {element}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="more" onClick={() => {console.log(recipeId)}}>
            for full recipe
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenericCard;