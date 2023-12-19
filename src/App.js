import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sale from './pages/Sale'
import Cart from './pages/Cart'
import Add from './pages/Add';
import Male from './pages/Male';
import Female from './pages/Female';
import { Provider } from 'react-redux';
import store from './store/store'
import AboutPro from './pages/AboutPro';
import Checkout from './pages/Checkout';



function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/male' element={<Male/>}/>
          <Route path='/female' element={<Female/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/aboutpro/:id' element={<AboutPro/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
