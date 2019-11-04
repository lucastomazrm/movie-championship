const service = require("../services/MoviesService");

class MoviesController {
  async movies(req, res) {
    const data = await service.getMovies().catch(x => x);
    res.send(data);
  }

  async groups(req, res) {
    const movies = req.body;

    if (!movies) {
      res.status(400).send();
      return false;
    } else {
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
    }
  }
  async semifinal(req, res) {
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
  }

  async final(req, res) {
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
  }
}

module.exports = new MoviesController();
