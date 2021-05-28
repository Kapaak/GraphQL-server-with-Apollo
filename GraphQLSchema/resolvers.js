const dummyData = require("../data");
const Person = require("../MongoSchema/person");

const resolvers = {
	Query: {
		getAllPersons() {
			return Person.find({});
		},
		getPerson(parent, args) {
			return Person.findById({ _id: args.id });
		},
	},
	Mutation: {
		createPerson(parent, args) {
			const newPerson = new Person({
				name: args.name,
				surname: args.surname,
				age: args.age,
			});
			return newPerson.save();
		},
		deletePerson(parent, args) {
			Person.findByIdAndDelete({ _id: args.id });
			return args.id;
		},
	},
};

module.exports = resolvers;
