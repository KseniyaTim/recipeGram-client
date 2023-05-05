import { FC, useState } from "react";

//mui
import { Button, TextField } from "@mui/material";

//css
import "./AddRecipe.css";

const AddRecipe: FC = () => {
  const [ingredientFields, setIngredientFields] = useState<number[]>([]);

  return (
    <div className="AddWrapper">
      <TextField id="outlined-basic" label="Recipe Name" variant="outlined" />
      <div className="photoField">
        <TextField id="outlined-basic" label="photo URL" variant="outlined" />
      </div>
      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            setIngredientFields((prev) => [...prev, 1]);
          }}
        >
          Add an ingredient
        </Button>
      </div>
      {ingredientFields.map((field, index) => (
        <div key={index} className="ingredientField">
          <TextField
            id="outlined-basic"
            label="ingredient"
            variant="outlined"
          />
        </div>
      ))}
      <div className="semiTitle">Instructions</div>
      <TextField
        id="outlined-basic"
        label="Instructions"
        variant="outlined"
        inputProps={{
          style: {
            height: "10rem",
            width: "20rem",
          },
        }}
      />
      <div className="button">
        <Button variant="contained">Publich Recipe</Button>
      </div>
    </div>
  );
};

export default AddRecipe;
