import './App.css';
import logo from './logo.svg';
import Login from './components/pages/login';
import Tost from "./components/elements/tost";
import Register from './components/pages/register';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';

function App() {
  return (
    <div className="App">
      <Tost />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Register' element={<Register />} />
        <Route path='*' element={<h1 className='my-5 text-center'>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
