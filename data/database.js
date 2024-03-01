const mongoose = require("mongoose");

const connectDatabase = () => {
  //connecting mongodb
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "todonodeapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
