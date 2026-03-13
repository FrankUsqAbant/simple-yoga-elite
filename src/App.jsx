import { Routes, Route } from 'react-router-dom'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import AdminLayout from './layouts/AdminLayout'

// Public Pages
import Home from './pages/public/Home'
import Classes from './pages/public/Classes'
import BlogList from './pages/public/BlogList'
import BlogPost from './pages/public/BlogPost'
import Contact from './pages/public/Contact'
import Success from './pages/public/Success'

// Admin Pages
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Config from './pages/admin/Config'
import AdminClasses from './pages/admin/AdminClasses'
import AdminBlog from './pages/admin/AdminBlog'
import AdminReservations from './pages/admin/AdminReservations'

function App() {
  return (
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
  )
}

export default App
