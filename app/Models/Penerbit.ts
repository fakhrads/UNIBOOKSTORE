import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Buku from './Buku'

export default class Penerbit extends BaseModel {

  static get table () { 
    return 'penerbit'
  }

  @column({ isPrimary: true })
  public id: number
  
  @hasMany(() => Buku)
  public buku: HasMany<typeof Buku>

  @column()
  public nama: string

  @column()
  public alamat: string
  
  @column()
  public kota: string
  
  @column()
  public telepon: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
