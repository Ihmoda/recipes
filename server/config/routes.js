//here we load the modules that we reated on the server.js page
var Recipe = require('./controllers/Recipe.js');
var path = require("path");

module.exports = function (app) {

    //GET '/' will serve up the full collection of recipes
    app.get('/recipes', function(req, res){
        Recipe.get_all(req,res);
    });

    //GET '/:name' will bring up the document of that particular Recipe.
    app.get('/recipes/:id', function(req, res){
        Recipe.get_one(req,res);
    });

    //POST '/add' will add a new Recipe to the database
    app.post('/add', function(req, res){
       Recipe.add(req,res);
    });

    //DELETE '/recipes/:id' will delete a Recipe from the database
    app.delete('/recipes/:id', function(req,res){
        Recipe.remove(req, res);
    });

    //Put/' will update value in database using provided data
    app.put('/recipes/:id', function(req,res){
        Recipe.update(req, res);
    });

    //Post/' will find current recipe, create ingredient and add to recipe.
    app.post('/ingredient/:id', function(req,res){
        console.log("updateIngredient");
        Recipe.updateIngredient(req, res);
    });

    //handle all other requests.
    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

}
