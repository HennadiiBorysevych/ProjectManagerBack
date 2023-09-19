const express = require("express");
const port = process.env.PORT || 5000;

const { graphqlHTTP } = require("express-graphql");

require("dotenv").config();

const app = express();

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