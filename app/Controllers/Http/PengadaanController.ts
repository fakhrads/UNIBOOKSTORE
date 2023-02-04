import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PengadaansController {
  public async index({ view }: HttpContextContract) {
    const data = await Database
                        .from('buku')
                        .select('buku.id','buku.nama_buku','buku.kode_buku','buku.stok','penerbit.nama as nama_penerbit')
                        .innerJoin('penerbit','buku.penerbit_id','penerbit.id')
                        .orderBy('buku.stok','asc')
    return view.render('pages/pengadaan', { data: data })
  }
}
