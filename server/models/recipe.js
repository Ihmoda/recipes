var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    chef: String,
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}]
}, {timestamps: true});

var Recipe = mongoose.model("Recipe", recipeSchema);

