const dummyData = require("../data");

const resolvers = {
	Query: {
		getAllPersons() {
			return dummyData;
		},
		getPerson(parent, args) {
			console.log(args.id);
			return dummyData[args.id];
		},
		hello: () => "Hello world!",
	},
	Mutation: {
		createPerson(parent, args) {
			const newPerson = { ...args };
			dummyData.push(newPerson);
			return newPerson;
		},
	},
};

module.exports = resolvers;
