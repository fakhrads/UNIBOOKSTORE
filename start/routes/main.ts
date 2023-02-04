import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index')
Route.get('/admin/penerbit', 'PenerbitController.index')
Route.get('/admin/penerbit/baru', 'PenerbitController.create')
Route.get('/admin/penerbit/edit/:id', 'PenerbitController.edit')
Route.post('/admin/penerbit/edit', 'PenerbitController.update').as('admin_penerbit_update')
Route.post('/admin/penerbit/baru', 'PenerbitController.store').as('admin_penerbit_store')
Route.post('/admin/penerbit/destroy', 'PenerbitController.destroy').as('admin_penerbit_destroy')


Route.get('/admin/buku', 'BukuController.index')
Route.get('/admin/buku/baru', 'BukuController.create')
Route.get('/admin/buku/edit/:id', 'BukuController.edit')
Route.post('/admin/buku/edit', 'BukuController.update').as('admin_buku_update')
Route.post('/admin/buku/baru', 'BukuController.store').as('admin_buku_store')
Route.post('/admin/buku/destroy', 'BukuController.destroy').as('admin_buku_destroy')


Route.get('/pengadaan', 'PengadaanController.index')