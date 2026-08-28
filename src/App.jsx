import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'

// Lazy-loaded Public Pages
const Home = lazy(() => import('./pages/public/Home'))
const Classes = lazy(() => import('./pages/public/Classes'))
const BlogList = lazy(() => import('./pages/public/BlogList'))
const BlogPost = lazy(() => import('./pages/public/BlogPost'))
const Contact = lazy(() => import('./pages/public/Contact'))
const Success = lazy(() => import('./pages/public/Success'))

// Lazy-loaded Admin Pages
const Login = lazy(() => import('./pages/admin/Login'))
const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const Config = lazy(() => import('./pages/admin/Config'))
const AdminClasses = lazy(() => import('./pages/admin/AdminClasses'))
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'))
const AdminReservations = lazy(() => import('./pages/admin/AdminReservations'))

// Luxury Minimalist Loading Fallback
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    color: 'var(--color-gold-light)'
  }}>
    <div style={{
      width: '36px',
      height: '36px',
      border: '2px solid rgba(212, 175, 55, 0.15)',
      borderTopColor: 'var(--color-gold)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <span style={{
      fontSize: '0.75rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#94a3b8',
      fontFamily: 'var(--font-mono)'
    }}>
      Cargando Santuario...
    </span>
  </div>
)

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="clases" element={<Classes />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="success" element={<Success />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="clases" element={<AdminClasses />} />
          <Route path="reservas" element={<AdminReservations />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
