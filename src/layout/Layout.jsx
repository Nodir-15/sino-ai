import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(16,185,129,0.15)_0%,transparent_50%),radial-gradient(at_70%_60%,rgba(45,212,191,0.15)_0%,transparent_50%),radial-gradient(at_40%_80%,rgba(103,232,249,0.12)_0%,transparent_60%)] z-[-2]"></div>
      
      {/* Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-32 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-cyan-300/25 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;