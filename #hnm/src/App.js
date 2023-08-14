import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsAll from './pages/ProductsAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
  <Routes>
    <Route path='/' element={<ProductsAll/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>
  </Routes>
  );
}

export default App;
