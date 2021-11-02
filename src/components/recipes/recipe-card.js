import {Col} from 'react-bootstrap';
import './recipe-card.scss';

const RecipeCard = ({title, imageUrl, recipeId, recipeClickHandler}) =>{
  return (
     <Col xs={12} md={3} className="mb-4" onClick={() => recipeClickHandler(recipeId)}>
        <div className="recipe-card" data-testid={`test-${recipeId}}`}>
          <div id="recipe-card__cover" className="recipe-card__cover">
            <div className="recipe-card__img" data-testid="img">
              <img
                src={imageUrl}
                alt={title} />
            </div>
            <div className="recipe-card__cover-details">
              <div id="recipe-card__info" className="recipe-card__info">
                <div className="recipe-card__title">
                  <h2 data-testid="title">{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
  )
}

export default RecipeCard
