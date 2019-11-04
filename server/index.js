const app = require("./app");
const localConfig = require("./config/local.json");

const port = process.env.PORT || localConfig.port;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
