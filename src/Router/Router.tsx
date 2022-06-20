import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ListSanPham from '../View/Home/Content/Product/ListProductHome';
import AddNewProduct from '../Component/Product/ListProduct';
import GioHang from '../View/Cart/Purchase';
import Login from '../View/Home/Content/Login/Login';
import DonHang from '../View/Cart/Order';

import AddProduct from '../View/Product Management/AddProduct';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<ListSanPham />}></Route>
            <Route path='/product' element={<AddNewProduct />}></Route>
            <Route path='/cart' element={<GioHang />}></Route>
            <Route path='/receipt' element={<DonHang />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/qlSanPham' element={<AddProduct />}></Route>
        </Routes>
    )
}
