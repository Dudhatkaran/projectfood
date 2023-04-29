import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Component1/Navbar/Navbar';
import Dashboard from './Component1/Dashboard/Dashboard';
import About from './Component1/About/About';
import Addblog from './Component1/Add-blog/Add-blog';
import Footer from './Component1/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/add-blog' element={ <Addblog /> } />
          <Route path='/contact' element={ <Footer /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
