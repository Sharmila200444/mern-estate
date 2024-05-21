import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/Signup" element={<Signup />}  />
      <Route path="/Signin" element={<Signin />}  />
      <Route path="/About" element={<About />}  />
      <Route path="/Profile" element={<Profile />}  />
      
    </Routes>
    </BrowserRouter>
  )
}



