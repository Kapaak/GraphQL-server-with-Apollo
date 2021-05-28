//libs
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const mongoose = require("mongoose");
//schemas
const resolvers = require("./GraphQLSchema/resolvers");
const typeDefs = require("./GraphQLSchema/typeDefs");

require("dotenv").config();
const app = express();
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connected to database"));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	//  playground: false
});

server.applyMiddleware({ app });

app.listen(4000, () => {
	console.log(`Server ready at http://localhost:4000/graphql`);
});
