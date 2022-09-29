import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [String!]!
  }

  type Mutations {
    createUser(name: String!): String!
  }
`;

const users: string[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },
    Mutations: {
      createUser: (parent, args, ctx) => {
        users.push(args.name);

        return args.name;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
