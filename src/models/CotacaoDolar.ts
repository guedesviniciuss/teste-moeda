import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cotacaoDolar')
class CotacaoDolar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  timestamp: number;

  @Column()
  dataHoraCotacao: string;

  @Column()
  dataCotacaoDolar: string;

  @Column()
  cotacaoCompra: number;

  @Column()
  cotacaoVenda: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default CotacaoDolar;
