import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCotacaoDolar1622255458890
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cotacaoDolar',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'timestamp',
            type: 'varchar',
          },
          {
            name: 'dataHoraCotacao',
            type: 'timestamp',
          },
          {
            name: 'dataCotacaoDolar',
            type: 'varchar',
          },
          {
            name: 'cotacaoVenda',
            type: 'numeric',
          },
          {
            name: 'cotacaoCompra',
            type: 'numeric',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cotacaoDolar');
  }
}
