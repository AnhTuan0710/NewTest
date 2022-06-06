import './App.css';
import ListSanPham from './Component/Product/ListSanPham';
import Slider from './Component/HeaderAndFooter/Slider';
import Header from './Component/HeaderAndFooter/Header';
import Footer from './Component/HeaderAndFooter/Footer';
import { Route, Routes } from 'react-router-dom';
import AddNewProduct from './Component/AddProduct/AddNewProduct';
import GioHang from './Component/Cart/GioHang';

function App() {
  return (
    <div>
      <div className='body' style={{
        display:'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      }}>
        <div className='slider' style={{
          width: '20%',
          border: '2px solid black'

        }}>
          <Slider/>
        </div>
        <div className='content' style={{
          display:'flex',
          flexDirection: 'column',
          width: '80%',
          border: '2px solid black',
          textAlign: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <Header/>
          <ListSanPham/>
          <Footer/>
        </div>

      </div>
    </div>
  );
}

export default App;
