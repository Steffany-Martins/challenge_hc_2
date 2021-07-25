import express from 'express';

import { ApolloServer, gql } from 'apollo-server-express';

const app = express();
const server = new ApolloServer({
    typeDefs: gql`
     type Client { 
       id: ID!
       name: String!
     }
       type Demand { 
         id: ID!
         name: String!
         client: Client!
         deadline: String
       }
   
       type Query { 
         demands: [Demand]!  
       }
       `,
       resolvers: { /* roda funções recursivamente para retornar os dados de forma certa*/
         Query: {
           demands: () => [],
         },
       },
});



await server.start();
server.applyMiddleware({
  app,
  cors: {
    origin:'http://localhost:3000',
  },
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});