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
        movies: [sortedMovies[i], sortedMovies[sortedMovies.length - i - 1]]
      });
    }
    res.send(groups);
  });

  router.post("/groups/semifinal", function(req, res, next) {
    const movies = req.body;

    let semifinal = [{ movies: [] }, { movies: [] }];
    movies.forEach((group, index) => {
      let winner;
      if (group.movies[0].score === group.movies[1].score) {
        winner = group.movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })[0];
      } else {
        winner = group.movies.sort((m1, m2) => m2.score - m1.score)[0];
      }
      switch (index) {
        case 0:
          semifinal[0].movies.push(winner);
          break;
        case 1:
          semifinal[1].movies.push(winner);
          break;
        case 2:
          semifinal[1].movies.push(winner);
          break;
        case 3:
          semifinal[0].movies.push(winner);
          break;
        default:
          break;
      }
    });
    res.send(semifinal);
  });

  router.post("/groups/final", function(req, res, next) {
    const movies = req.body;

    let final = [{ movies: [] }];
    movies.forEach((group, index) => {
      let winner;
      if (group.movies[0].score === group.movies[1].score) {
        winner = group.movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })[0];
      } else {
        winner = group.movies.sort((m1, m2) => m2.score - m1.score)[0];
      }
      final[0].movies.push(winner);
    });
    res.send(final);
  });

  app.use("/movies", router);
};
