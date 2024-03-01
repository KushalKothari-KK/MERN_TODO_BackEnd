const app = require("./app");
const connectDatabase = require("./data/database");

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server Started on PORT:${process.env.PORT}`);
});
