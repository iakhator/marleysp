import {useState, useEffect} from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import {
  useParams
} from "react-router-dom";
import { getRecipe } from '../../services/recipeServices';

import './recipe.scss';

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const [isRecipeLoading, setIsRecipeLoading] = useState(false)
  let { id } = useParams();

  useEffect((() => {
    setIsRecipeLoading(true)
    getRecipe(id).then(response =>  {
      setRecipe(response)
      setIsRecipeLoading(false)
    })
  }), [id])
  
  return <Row>
    <Col xs={12} md={12}>
      {isRecipeLoading && <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
      {recipe && recipe.fields && !isRecipeLoading && <div className="recipe-detail">
        <div className="recipe-detail__img">
            <img
              src={recipe.fields.photo.fields.file.url}
              alt={recipe.fields.title} />
        </div>
        <div className="recipe-detail__description">
            <h2>{recipe.fields.title}</h2>
            <div className="recipe-detail__description-sect">
              <span className="head">Tags</span>
              <div className="recipe-detail__description-sect-recip">
                {recipe.fields.tags ? recipe.fields.tags.map(tag => (<span key={tag.sys.id} className="tag">{tag.fields.name}</span>)) : 'N/A'}
              </div>
            </div>
            <div className="recipe-detail__description-sect">
              <span className="head">Description</span>
              <div className="recipe-detail__description-sect-recip">
                <ReactMarkdown>{recipe.fields.description}</ReactMarkdown>
              </div>
            </div>
             <div className="recipe-detail__description-sect">
              <span className="head">Tags</span>
              <div className="recipe-detail__description-sect-recip">
                {recipe.fields.chef  ? recipe.fields?.chef?.fields.name : 'N/A'}
              </div>
            </div>
        </div>
      </div>}
    </Col>
  </Row>
}

export default Recipe;
