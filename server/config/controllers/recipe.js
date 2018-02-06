var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var Ingredient = mongoose.model('Ingredient');
var moment = require('moment');

module.exports = {
    get_all: function(req, res){
        Recipe.find({}).populate('ingredients').exec(function(err, result){
            if (err){
                console.log(err);
                res.redirect('/recipes');
            } else {
                console.log("successfully retrieved recipes");
                res.json(result);
            }
        })
    },
    add: function(req, res){
        new_recipe = new Recipe();
        new_recipe.name = req.body.name
        new_recipe.rating = req.body.rating;
        new_recipe.chef = req.body.chef;
        new_recipe.save(function (err){
            if (err){
                console.log(err)
                res.redirect('/recipes');
            } else {
                console.log("successfully saved Recipe");
                res.redirect('/recipes');
            }
        })
    },
    remove:  function(req,res){
        Recipe.remove({_id: req.params.id}, function(err){
            if (err){
                console.log(err);
                res.redirect('/recipes')
            } else {
                console.log("successfully removed Recipe");
                res.redirect(303,'/recipes');
            }
        })
    },
    get_one:  function(req, res){
        Recipe.findOne({_id: req.params.id}, function(err, result){
            if (err){
                console.log(err);
                res.redirect('/recipes');
            } else {
                console.log("Successfully found 1 user");
                res.json(result);
            }
        });
    },
    update: function(req, res){
        Recipe.update({_id: req.params.id}, {name: req.body.name, rating: req.body.rating, chef: req.body.chef, ingredients: req.body.ingredients}, function(err, result){
            if (err){
                console.log(err);
                res.redirect(303,'/recipes');
            } else {
                console.log("successfully updated Recipe");
                res.redirect(303, '/recipes');
            }
        });
    },
    updateIngredient: function(req, res){
        Recipe.findOne({_id: req.params.id}, function(err, recipe){
            if (err){
                console.log(err);
            } else {
                console.log("Successfully found 1 recipe");
                new_ingredient = new Ingredient();
                new_ingredient.name = req.body.name;
                new_ingredient.amount = req.body.amount;
                new_ingredient._recipe = recipe;
                new_ingredient.save(function(err){
                    if (err){
                        console.log(err);
                    } else {
                        console.log("added ingredient");
                        recipe.ingredients.push(new_ingredient);
                        recipe.save(function(err){
                            if (err){
                                console.log(err);
                            } else {
                                res.redirect(303, '/recipes')
                            }
                        });
                        
                    }
                })
            }
        });
    }
}