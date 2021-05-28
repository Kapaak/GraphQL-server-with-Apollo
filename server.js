const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./GraphQLSchema/resolvers");
const typeDefs = require("./GraphQLSchema/typeDefs");

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	//  playground: false
});

server.applyMiddleware({ app });

app.listen(4000, () => {
	console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
