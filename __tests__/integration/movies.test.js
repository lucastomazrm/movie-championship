const request = require("supertest");
const service = require("../../server/src/services/MoviesService");

const app = require("../../server/app");

describe("API Integration", () => {
  let movies;
  let groups;

  beforeAll(async () => {
    movies = await service.getMovies().catch(x => x);
  });

  it("Should return 16 movies from API", async () => {
    expect(movies.length).toBe(16);
  });

  it("Should return leatest 8 one", async () => {
    let selectedMovies = movies.slice(0, 7);
    let response = await request(app)
      .post("/movies/groups")
      .send(selectedMovies);

    groups = response.body;
    expect(response.body.length).toBe(4);
  });

  it("Should return the 2 groups that will be on semifinal", async () => {
    let response = await request(app)
      .post("/movies/groups/semifinal")
      .send(groups);

    groups = response.body;
    expect(response.body.length).toBe(2);
  });

  it("Should return only two films, the winner and the second position", async () => {
    let response = await request(app)
      .post("/movies/groups/final")
      .send(groups);

    expect(response.body.length).toBe(1);
  });

  it("Should return Avengers as Winner and The Incredibles 2 as second", async () => {
    let response = await request(app)
      .post("/movies/groups/final")
      .send(groups);

    expect(JSON.stringify(response.body[0].movies[0])).toBe(
      JSON.stringify({
        id: "tt4154756",
        title: "Vingadores: Guerra Infinita",
        releaseYear: 2018,
        score: 8.8
      })
    );

    expect(JSON.stringify(response.body[0].movies[1])).toBe(
      JSON.stringify({
        id: "tt3606756",
        title: "Os Incríveis 2",
        releaseYear: 2018,
        score: 8.5
      })
    );
  });
});
