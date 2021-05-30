import AppError from '../errors/AppError';
import ConsultCotacaoDolarApiService from '../services/ConsultCotacaoDolarApiService';
import CreateCotacaoDolarService from '../services/CreateCotacaoDolarService';

import checkDate from '../utils/checkDate';

class CotacaoDolarController {
  async consultarCotacao(dataCotacaoDolar: string) {
    const consultCotacaoDolarApiService = new ConsultCotacaoDolarApiService();
    const createCotacaoDolarService = new CreateCotacaoDolarService();

    const validatedDate = checkDate(dataCotacaoDolar);

    if (validatedDate instanceof AppError) {
      return validatedDate;
    }

    const response =
      await consultCotacaoDolarApiService.execute(dataCotacaoDolar);

      if (response instanceof AppError) {
        return response;
      }

    const { cotacaoCompra, cotacaoVenda, dataHoraCotacao } = response;

    const cotacao = await createCotacaoDolarService.execute({
      cotacaoCompra,
      cotacaoVenda,
      dataHoraCotacao,
      dataCotacaoDolar,
    });

    return cotacao;
  }
}

export default new CotacaoDolarController();
