import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'
import Home from './pages/public/Home'

// Páginas cargadas bajo demanda (Home va en el paquete inicial)
const pages = {
  Classes: () => import('./pages/public/Classes'),
  BlogList: () => import('./pages/public/BlogList'),
  BlogPost: () => import('./pages/public/BlogPost'),
  Contact: () => import('./pages/public/Contact'),
  Success: () => import('./pages/public/Success'),
  Login: () => import('./pages/admin/Login'),
  Dashboard: () => import('./pages/admin/Dashboard'),
  Config: () => import('./pages/admin/Config'),
  AdminClasses: () => import('./pages/admin/AdminClasses'),
  AdminBlog: () => import('./pages/admin/AdminBlog'),
  AdminReservations: () => import('./pages/admin/AdminReservations'),
}
const L = Object.fromEntries(Object.entries(pages).map(([k, f]) => [k, lazy(f)]))

// Precarga las páginas públicas cuando el navegador está libre: navegación instantánea
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500))
idle(() => ['Classes', 'BlogList', 'Contact'].forEach((k) => pages[k]()))

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="clases" element={<L.Classes />} />
        <Route path="blog" element={<L.BlogList />} />
        <Route path="blog/:id" element={<L.BlogPost />} />
        <Route path="contacto" element={<L.Contact />} />
        <Route path="success" element={<L.Success />} />
      </Route>

      <Route path="/login" element={<Suspense fallback={null}><L.Login /></Suspense>} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<L.Dashboard />} />
        <Route path="clases" element={<L.AdminClasses />} />
        <Route path="reservas" element={<L.AdminReservations />} />
        <Route path="blog" element={<L.AdminBlog />} />
        <Route path="config" element={<L.Config />} />
      </Route>
    </Routes>
  )
}

export default App
