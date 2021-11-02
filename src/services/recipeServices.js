import client from '../client';

export const getRecipes = () => {
  return client.getEntries({content_type: 'recipe', select: 'sys.id,fields.title,fields.photo'}).then(function (entries) {
    return entries.items
  });
}

export const getRecipe = (recipeId) => {
  return client.getEntry(recipeId, {select: 'sys.id,fields'}).then(function (entry) {
    return entry
  });
}
