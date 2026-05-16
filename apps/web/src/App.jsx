import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landing';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { CustomerDashboardPage } from './pages/customer-dashboard';
import { BookingNewPage } from './pages/booking-new';
import { AdminPage } from './pages/admin';
import { AdminPendingProvidersPage } from './pages/admin-pending-providers';

function Nav() {
  return (
    <nav className="glass mx-auto mt-4 flex max-w-6xl gap-4 rounded-xl px-4 py-3 text-sm">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/app">App</Link>
      <Link to="/app/book/new">New Booking</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/admin/providers/pending">Pending Providers</Link>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/app" element={<CustomerDashboardPage />} />
        <Route path="/app/book/new" element={<BookingNewPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/providers/pending" element={<AdminPendingProvidersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
