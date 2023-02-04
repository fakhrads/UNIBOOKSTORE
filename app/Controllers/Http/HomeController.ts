import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AdminsController {
  public async index({ view }: HttpContextContract) {
    const data = await Database
                        .from('buku')
                        .select('buku.id','buku.kategori','buku.kode_buku','buku.nama_buku','buku.harga','buku.stok','penerbit.nama as nama_penerbit')
                        .innerJoin('penerbit','buku.penerbit_id','penerbit.id')
    return view.render('pages/home', { data: data })
  }
}
