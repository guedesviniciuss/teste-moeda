import CotacaoDolarController from './controllers/CotacaoDolarController';

const resolvers = {
  CotacaoResult: {
    __resolveType(obj, _context, _info){
      if(obj.id){
        return 'CotacaoDolar';
      }
      if(obj.message){
        return 'CotacaoDolarError';
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    cotacaoDolar: (_, { date }) =>
      CotacaoDolarController.consultarCotacao(date),
  },
};

export default resolvers;
