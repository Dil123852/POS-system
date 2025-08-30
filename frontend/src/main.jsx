import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import LoginPage from './Pages/Loging'
import HomePage from './Pages/Home'
import AdminDashbord from './components/Admin/AdminDashbord'
import UserManagment from './components/Admin/UserManagment'
import ProfilePage from './components/User/Profile'

const clerk_key = import.meta.env.VITE_CLERK_KEY;

if (!clerk_key) {
  throw new Error('VITE_CLERK_KEY is not defined. Please set it in your .env file.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key} afterSignOutUrl={"/"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />  
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin/dashboard" element={<AdminDashbord/>} /> 
          <Route path="/admin/dashboard/usermanagement" element={<UserManagment/>} />  
          <Route path="/user/profile" element={<ProfilePage/>} />  


        </Routes>       
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
)
