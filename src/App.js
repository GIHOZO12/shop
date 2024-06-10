
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Men_banner from './Components/Assets/banner_mens.png'
import Women_banner from './Components/Assets/banner_women.png'
import Kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'  element={<Shop/>}/>
      <Route path='/mens'  element={<ShopCategory  banner={Men_banner} Category='men'/>}/>
      <Route path='/Womens'   element={<ShopCategory banner={Women_banner} Category='women' />}/>
      <Route path='/Kids'  element={<ShopCategory  banner={Kids_banner} Category='kid'/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/:productId' element={<Product/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/login'  element ={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
