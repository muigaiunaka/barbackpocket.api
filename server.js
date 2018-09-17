const express = require("express");
const { join } = require("path");
const expressgql = require("express-graphql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 7777;
const app = express();

// Set up App server
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Apollo Server
const apolloServer = require('./graphql');

apolloServer.applyMiddleware({ app });
// Set Database source
let MONGO_URI = process.env.MONGO_URI;
if (!isProduction) {
    MONGO_URI = `mongodb://127.0.0.1:27017/barbackpocketdb`
}
// Establish the mongo connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log("Database connected");
        // Establish server connection
        app.listen(PORT);
        let resp = `Server running on ${PORT}`;
        resp += `🚀 with GraphQL Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
        let serverConnectResponse = resp;
        console.log(serverConnectResponse);
    })
    .catch(err => {
        console.error(err);
    });