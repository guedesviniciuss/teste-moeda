import api from '../utils/axios';

import AppError from '../errors/AppError';

interface ICotacaoResponse {
  value: [ICotacaoValueResponse];
}

interface ICotacaoValueResponse {
  cotacaoCompra: number;
  cotacaoVenda: number;
  dataHoraCotacao: string;
}

class ConsultCotacaoDolarService {
  public async execute(date: string): Promise<ICotacaoValueResponse | AppError> {
    const params = {
      '@dataCotacao': `'${date}'`,
      format: 'json',
    };

    const { data } = await api.get<ICotacaoResponse>(
      '/CotacaoDolarDia(dataCotacao=@dataCotacao)',
      { params },
    );

    if (!data.value.length) {
      return new AppError('No value available for that date', 404);
    }

    const infoCotacao = data.value[0];

    return infoCotacao;
  }
}

export default ConsultCotacaoDolarService;
