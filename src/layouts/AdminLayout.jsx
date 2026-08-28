import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const isAuthenticated = true; 

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/clases', label: 'Gestión de Clases', icon: Calendar },
    { path: '/admin/reservas', label: 'Reservas Pagadas', icon: CreditCard },
    { path: '/admin/blog', label: 'Reflexiones / Blog', icon: BookOpen },
    { path: '/admin/config', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="admin-wrapper" style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      {/* Sidebar Wellness v6.0 */}
      <aside className="admin-sidebar-wellness" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 800 }}>
            SYS<span className="text-accent">Admin</span>
          </h2>
          <span className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Protocolo v8.0</span>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`sidebar-link-wellness ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {location.pathname === item.path && <ChevronRight size={16} style={{ marginLeft: 'auto', opacity: 0.5 }} />}
            </Link>
          ))}
        </nav>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
          <Link to="/" className="sidebar-link-wellness">
            <LogOut size={20} />
            <span>Volver al Sitio</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header className="admin-topbar-wellness" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(2, 6, 23, 0.8)' }}>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
            {navItems.find(i => i.path === location.pathname)?.label || 'Panel de Administración'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>
              A
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Mando Central</span>
          </div>
        </header>
        
        <div style={{ flex: 1, padding: '2.5rem', overflowY: 'auto' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
