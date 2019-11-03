const express = require("express");
const fetch = require("node-fetch");

module.exports = function(app) {
  const router = express.Router();

  router.get("/", function(req, res, next) {
    const url = "https://copafilmes.azurewebsites.net/api/filmes";

    const requestInfo = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    fetch(url, requestInfo)
      .then(response => {
        if (!response.ok) {
          res.status(response.statusCode).send();
        } else {
          response.json().then(data => {
            const movies = data.map(filme => {
              return {
                id: filme.id,
                title: filme.titulo,
                releaseYear: filme.ano,
                score: filme.nota
              };
            });
            res.send(movies);
          });
        }
      })
      .catch(x => {
        res.statusCode(500).send();
      });
  });

  router.post("/groups", function(req, res, next) {
    const movies = req.body;

    const sortedMovies = movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    let groups = [];
    for (let i = 0; i < sortedMovies.length / 2; i++) {
      groups.push({
        firstMovie: sortedMovies[i],
        secondMovie: sortedMovies[sortedMovies.length - i - 1]
      });
    }
    res.send(groups);
  });

  app.use("/movies", router);
};
