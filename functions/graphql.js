  
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    todos: [Todo]!
  }
  type Todo{
      id: ID!
      value: String!
      done: Boolean!
  }
  type Mutation{
      addTodo(value: String!):Todo
      updateTodoDone(id: ID!): Todo
  }
`;

const todos = {};
let todoIndex=0;
const resolvers = {
  Query: {
    todos: (parent, args, context) => {
      return Object.values(todos)
    }
  },
  Mutation:{
      addTodo: (_,{value})=>{
        todoIndex++;
        const id = `key-${todoIndex}`;
        todos[id] = {id,value,done:false}
        return todos[id]
      },
      updateTodoDone: (_,{id})=>{
          todos[id].done = true;
          return todos[id];

      }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();