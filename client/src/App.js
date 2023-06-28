import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';
import AddOrder from './component/AddOrder';
import Editorder from './component/Editorder';
import Details from './component/Details';
// import ProtectedRout from './ProtectedRout';

function App() {
  return (
    <>
    <Router>
          <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={ <About />} /> 
        <Route path='/service' element={<Services />} /> 
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/footer' element={ <Footer />} />
        <Route path='/login' element={<Login />} auth={false} />
        <Route path='/register' element={ <Register />} auth={false} />
        <Route path='/dashboard' element={ <Dashboard />} auth={false} />
        <Route path='/logout' element={ <Logout />} auth={false} />
        <Route path='/addorder' element={ <AddOrder />} /> 
        <Route path='/editorder/:id' element={ <Editorder />} /> 
        <Route path='/details/:id' element={ <Details />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
