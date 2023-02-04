import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Buku from 'App/Models/Buku'
import Penerbit from 'App/Models/Penerbit'

export default class BukusController {
  public async index({ view }: HttpContextContract) {
    const data = await Database
                        .from('buku')
                        .select('buku.id','buku.kategori','buku.kode_buku','buku.nama_buku','buku.harga','buku.stok','penerbit.nama as nama_penerbit')
                        .innerJoin('penerbit','buku.penerbit_id','penerbit.id')
    return view.render('pages/pegawai/buku', { data: data })
  }

  public async create({ view }: HttpContextContract) {
    const data = await Penerbit.all()
    return view.render('pages/pegawai/buku_add', { data: data })
  }

  public async store({ request, session, response}: HttpContextContract) {
    const kode_buku = request.input('kode_buku')
    const nama_buku = request.input('nama_buku')
    const kategori = request.input('kategori')
    const harga = request.input('harga')
    const stok = request.input('stok')
    const penerbit = request.input('penerbit')

    try {
      await Buku.create({
        kode_buku: kode_buku,
        nama_buku: nama_buku,
        kategori: kategori,
        harga: harga,
        stok: stok,
        penerbit_id: penerbit
      })
      session.flash('success','Buku Baru Telah Ditambahkan!')
      return response.redirect().back()
    } catch(e) {
      session.flash('error', e.message)
      return response.redirect().back()
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({ request, view }: HttpContextContract) {
    const id = request.param('id')
    const data = await Buku.findOrFail(id)
    const data_penerbit = await Penerbit.all()
    return view.render('pages/pegawai/buku_edit', { data: data, data_penerbit: data_penerbit })
  }

  public async update({ request, response, session}: HttpContextContract) {
    const id = request.input('id')
    const kode_buku = request.input('kode_buku')
    const nama_buku = request.input('nama_buku')
    const kategori = request.input('kategori')
    const harga = request.input('harga')
    const stok = request.input('stok')
    const penerbit = request.input('penerbit')

    try {
      const buku = await  Buku.findOrFail(id)
      buku.kode_buku = kode_buku
      buku.nama_buku = nama_buku
      buku.kategori = kategori
      buku.harga = harga
      buku.stok = stok
      buku.penerbit_id = penerbit
      buku.save()
      session.flash('success','Berhasil Update Buku!')
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e.message)
      return response.redirect().back()
    }
  }

  public async destroy({ request, session, response}: HttpContextContract) {
    const id = request.input('id')
    try {
      const buku = await Buku.findOrFail(id)
      await buku.delete()

      session.flash('success', "Data berhasil di hapus")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e)
      return response.redirect().back()
    }
  }
}
