const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Person {
		name: String!
		surname: String!
		age: Int!
		id: ID!
	}

	#uvnitr query napis vsecky queries, ktery chci delat, vsechny requesty
	type Query {
		getAllPersons: [Person!]!
		getPerson(id: ID!): Person!
	}

	type Mutation {
		createPerson(name: String!, surname: String!, age: Int!): Person!
		# deletePerson(id: ID!): Person!
		deletePerson(id: ID!): ID!
	}
`;

module.exports = typeDefs;
