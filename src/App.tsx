import './App.css';
import ListSanPham from './Component/Product/ListSanPham';
import Slider from './Component/HeaderAndFooter/Slider';
import Header from './Component/HeaderAndFooter/Header';
import Footer from './Component/HeaderAndFooter/Footer';
import { Route, Routes } from 'react-router-dom';
import AddNewProduct from './Component/AddProduct/AddNewProduct';
import GioHang from './Component/Cart/GioHang';
import Login from './Component/Login/Login';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect } from 'react';
import AddProduct from './Component/AddProduct/AddProduct';

const config = {
  apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
  authDomain: 'myproject-1234.firebaseapp.com',
};
firebase.initializeApp(config);
function App() {
  return (
    <div>
      <div className='body' style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      }}>
        <div className='slider' style={{
          width: '20%',
          border: '2px solid black'

        }}>
          <Slider />
        </div>
        <div className='content' style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          border: '2px solid black',
          textAlign: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <Header />
          <div className='backGround'>
            <Routes>
              <Route path='/' element={<ListSanPham />}></Route>
              <Route path='/product' element={<AddNewProduct />}></Route>
              <Route path='/cart' element={<GioHang />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/qlSanPham' element={<AddProduct />}></Route>

            </Routes>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;
