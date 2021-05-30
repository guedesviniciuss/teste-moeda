import './database';

import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
server.use(cors());

server.start(() => {
  console.log('Server is running on localhost:4000');
});
