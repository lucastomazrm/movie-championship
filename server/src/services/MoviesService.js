const rp = require("request-promise");

class MoviesService {
  static async getMovies() {
    const options = {
      uri: `https://copafilmes.azurewebsites.net/api/filmes`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      json: true
    };

    return rp(options)
      .then(response => {
        if (!response) {
          return 401;
        } else {
          return response.map(filme => {
            return {
              id: filme.id,
              title: filme.titulo,
              releaseYear: filme.ano,
              score: filme.nota
            };
          });
        }
      })
      .catch(x => x);
  }
}

module.exports = MoviesService;
