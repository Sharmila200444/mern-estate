import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import About from './pages/About';
import Profile from './pages/Profile';
<<<<<<< HEAD
import Header from './Components/Header';
=======
>>>>>>> 49d0357515e6c8b739240a69b184429f4a1c51c1

export default function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Header/>
=======
>>>>>>> 49d0357515e6c8b739240a69b184429f4a1c51c1
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



