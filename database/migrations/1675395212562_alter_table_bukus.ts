import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'buku'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('penerbit_id')
        .unsigned()
        .references('penerbit.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
