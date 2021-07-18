"use strict";
// Import mongoose
const mongoose = require("mongoose");

// Create Schema Instance and add schema propertise
const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  headline: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  link: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  totalOrdered: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  nutrition: {},
  ingredients: {},
  steps: {},
});

// automatically generate createdAt and updatedAt fields for your document
RecipeSchema.set("timestamp", true);

// create and export model
const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
