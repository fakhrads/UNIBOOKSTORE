import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'buku'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('kode_buku')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
