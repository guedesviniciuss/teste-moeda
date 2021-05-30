import { getRepository } from 'typeorm';

import CotacaoDolar from '../models/CotacaoDolar';

interface Request {
  cotacaoCompra: number;
  cotacaoVenda: number;
  dataHoraCotacao: string;
  dataCotacaoDolar: string;
}

class CreateCotacaoDolarService {
  public async execute({
    cotacaoCompra,
    cotacaoVenda,
    dataHoraCotacao,
    dataCotacaoDolar,
  }: Request): Promise<CotacaoDolar> {
    const cotacaoDolarRepository = getRepository(CotacaoDolar);

    const contacaoDolar = cotacaoDolarRepository.create({
      cotacaoCompra,
      cotacaoVenda,
      dataHoraCotacao,
      dataCotacaoDolar,
      timestamp: Date.now(),
    });

    await cotacaoDolarRepository.save(contacaoDolar);

    return contacaoDolar;
  }
}

export default CreateCotacaoDolarService;
