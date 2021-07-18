// import Recipe Model
const Recipe = require("../models/recipeModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllRecipes function - To list all recipes
exports.listAllRecipes = (req, res) => {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(recipe);
  });
};

// createNewRecipe function - To create new recipe
exports.createNewRecipe = (req, res) => {
  let newRecipe = new Recipe(req.body);
  newRecipe.save((err, recipe) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(recipe);
  });
};

// updateRecipe function - To update recipe status by id
exports.updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, recipe) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(recipe);
    }
  );
};

// deleteRecipe function - To delete recipe by id
exports.deleteRecipe = async (req, res) => {
  await Recipe.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: "Recipe successfully deleted" });
  });
};
