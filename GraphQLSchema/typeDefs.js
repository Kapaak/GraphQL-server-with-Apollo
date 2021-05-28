const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Person {
		name: String!
		surname: String!
		age: Int!
	}

	#uvnitr query napis vsecky queries, ktery chci delat, vsechny requesty
	type Query {
		getAllPersons: [Person!]!
		getPerson(id: Int!): Person!
		hello: String
	}

	type Mutation {
		createPerson(name: String!, surname: String!, age: Int!): Person!
	}
`;

module.exports = typeDefs;
