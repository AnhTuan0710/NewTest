import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../App/hook'
import { addPro } from '../../Feature/CartSlice';
import { getAllProduct } from '../../Feature/ProductSlice';
import { SanPhamType } from '../../TypeState/ProductType';

export default function ListSanPham() {
  const dispatch = useAppDispatch();
  const listData = useAppSelector(state => state.listProduct);
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProduct())
  }, []);
  const loaiSP: SanPhamType[] = listData.listProduct
  const showProduct = loaiSP.map((item, index) => {
    return (
      <div key={index} className='pro' style={{
        width: "300px", margin: '20px 20px', height: "420px", borderRadius: "5px", display: 'flex', flexDirection: 'column', backgroundColor: 'white', textAlign: 'center', alignItems: 'center'
      }}>
        <img alt='' src={item.image} style={{
          width: "290px", height: "250px", marginTop: '10px', borderRadius: '5px'
        }} ></img>
        <span style={{
          fontSize: '20px', fontWeight: 'bold'
        }}>{item.name}</span>
        <p >Gia: <span style={{ color: 'red' }}> {item.price}</span></p>
        <p>Don vi: <span style={{ color: 'blue' }}> {item.init}</span></p>
        <button onClick={() => {
         dispatch(addPro(item.name, item.image, item.price, 1));
         navigate('/cart')
        }}
          style={{ backgroundColor: 'red', padding: '5px 10px', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Add to cart</button>
      </div>
    )
  });
  return (
    <div className='listSanpham'>
      <h4 className='text-dark mt-3'>Danh sách sản phẩm</h4>
      <div className='divPro' style={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {loaiSP ? showProduct : ""}
      </div>
    </div>
  )
}
