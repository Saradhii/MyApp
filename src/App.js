import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';



function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route default path='/' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
    </Routes>
    </>
  );
}

export default App;
