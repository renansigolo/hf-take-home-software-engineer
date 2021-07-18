// recipeList Routes
module.exports = function (app) {
  const recipeList = require('../controllers/recipeController')

  // get and post request for /recipes endpoints
  app
    .route('/recipes')
    .get(recipeList.listAllRecipes)
    .post(recipeList.createNewRecipe)

  // put and delete request for /recipes endpoints
  app
    .route('/recipe/:id')
    .put(recipeList.updateRecipe)
    .delete(recipeList.deleteRecipe)
}
