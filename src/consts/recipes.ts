import { IGenericRecipe } from "../components/GenericRecipe/IGenericRecipe";

export const RECIPES_TEST: IGenericRecipe[] = [
  {
    name: "Chicken Alfredo",
    img: "https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg",
    userName: "Kseniya",
    ingredients: ["chicken", "pasta"],
    likes: 100,
    recipeId: 1,
    instructins: ["cook chicken", "cook pasta", "combine"]
  },
  {
    name: "Tomato Soup",
    img: "https://natashaskitchen.com/wp-content/uploads/2021/08/Tomato-Soup-Recipe-4-728x1092.jpg",
    userName: "Natasha",
    ingredients: ["Tomato", "Water"],
    likes: 60,
    recipeId: 2,
    instructins: ["peel tomatos", 'add to a pot']
  },
];
