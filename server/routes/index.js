const routes = require("express").Router();

const HealthController = require("../src/controllers/HealthController");
const MoviesController = require("../src/controllers/MoviesController");

routes.get("/health", HealthController.health);
routes.get("/movies", MoviesController.movies);
routes.post("/movies/groups", MoviesController.groups);
routes.post("/movies/groups/semifinal", MoviesController.semifinal);
routes.post("/movies/groups/final", MoviesController.final);

module.exports = routes;
