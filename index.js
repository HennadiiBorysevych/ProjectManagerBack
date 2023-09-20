const express = require("express");
const port = process.env.PORT || 5000;

const { graphqlHTTP } = require("express-graphql");

require("dotenv").config();
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log("Running at", port);
});
