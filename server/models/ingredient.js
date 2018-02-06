var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new mongoose.Schema({
    name: String,
    amount: String,
    _recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
}, {timestamps: true});

var Ingredient = mongoose.model("Ingredient", ingredientSchema);
