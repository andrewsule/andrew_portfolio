
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import Projects from './components/Projects';

function App() {


  return (
    <div className='bg-slate-700 app'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        </BrowserRouter>
        <p className='text-gray-400 text-center italic'>Copyrights © 2025 All rights reserved.</p>
    </div>
  )
}

export default App
