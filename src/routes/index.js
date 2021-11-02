import Recipes from "../pages/recipes/recipes";
import Recipe from "../pages/recipe/recipe";

const recipeRoutes = [
  {path: '/', component: Recipes, name: 'recipes'},
  {path: '/recipe/:id', component: Recipe, name: 'recipe'}
]

export default recipeRoutes;
