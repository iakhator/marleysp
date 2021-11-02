import {useState, useEffect} from 'react';
import {Row, Spinner} from 'react-bootstrap';
import { getRecipes } from '../../services/recipeServices';
import RecipeCard from '../../components/recipes/recipe-card';
import './recipes.scss';

const Recipes = ({history}) => {
   const [recipes, setRecipes] = useState([])
   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getRecipes()
      .then((response) => {
        setRecipes(response)
        setIsLoading(false)
      })
  }, [])

  const recipeClickHandler = (recipeId) => {
    history.push(`recipe/${recipeId}`)
  }

  return (
    <Row className="recipes-wrapper">
      {isLoading ? <Spinner animation="border" role="status">
        <span className="visually-hidden" data-testid="loading">Loading...</span>
      </Spinner> : 
      recipes.map((recipe, index) => {
        return <RecipeCard  
        key={recipe.sys.id} 
        title={recipe.fields?.title} 
        imageUrl={recipe.fields?.photo.fields?.file.url} 
        recipeId={recipe.sys.id} 
        recipeClickHandler={recipeClickHandler}/> })}
  </Row>
  )
}

export default Recipes;
