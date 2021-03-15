const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const port = 8080;


const gateway = new ApolloGateway({
  serviceList: [
    { name: "astronauts", url: "http://0.0.0.0:4001" },
    { name: "missions", url: "http://0.0.0.0:4002" }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
