const express = require("express");
const fetch = require("node-fetch");

module.exports = function(app) {
  const router = express.Router();

  router.get("/", async function(req, res, next) {
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

  app.use("/movies", router);
};
