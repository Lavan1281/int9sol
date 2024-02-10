
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import Footer from './component/footer/Footer';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
