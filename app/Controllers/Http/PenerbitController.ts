import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Penerbit from 'App/Models/Penerbit'

export default class PenerbitsController {
  public async index({ view }: HttpContextContract) {
    const data = await Penerbit.all()
    return view.render('pages/pegawai/penerbit', { data: data })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('pages/pegawai/penerbit_add')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const nama_penerbit = request.input('nama_penerbit')
    const alamat = request.input('alamat')
    const kota = request.input('kota')
    const telepon = request.input('telepon')

    try {
      await Penerbit.create({
        nama: nama_penerbit,
        alamat: alamat,
        kota: kota,
        telepon: telepon
      })
      session.flash('success','Penerbit Baru Telah Ditambahkan!')
      return response.redirect().back()
    } catch(e) {
      session.flash('error', e.message)
      return response.redirect().back()
    }
  }

  public async edit({ view, request }: HttpContextContract) {
    const id = request.param('id')
    const data = await Penerbit.findOrFail(id)
    return view.render('pages/pegawai/penerbit_edit', { data: data })
  }

  public async update({ request, response, session }: HttpContextContract) {
    const id = request.input('id')
    const nama = request.input('nama_penerbit')
    const alamat = request.input('alamat')
    const kota = request.input('kota')
    const telepon = request.input('telepon')

    try {
      const penerbit = await Penerbit.findOrFail(id)
      penerbit.nama = nama
      penerbit.alamat = alamat
      penerbit.kota = kota
      penerbit.telepon = telepon
      penerbit.save()
      session.flash('success','Berhasil Update Penerbit!')
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e.message)
      return response.redirect().back()
    }
  }

  public async destroy({ request, response, session }: HttpContextContract) {
    const id = request.input('id')
    try {
      const cabang = await Penerbit.findOrFail(id)
      await cabang.delete()

      session.flash('success', "Data berhasil di hapus")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e)
      return response.redirect().back()
    }
  }
}
