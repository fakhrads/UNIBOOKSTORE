import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Buku extends BaseModel {
  static get table () { 
    return 'buku'
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public penerbit_id: number

  @column()
  public kode_buku: string

  @column()
  public kategori: string

  @column()
  public nama_buku: string

  @column()
  public harga: number

  @column()
  public stok: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
