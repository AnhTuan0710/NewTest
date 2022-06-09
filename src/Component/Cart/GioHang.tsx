import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import React, {useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hook';
import { getAllProduct } from '../../Feature/ProductSlice';

export default function GioHang() {
  const dispath = useAppDispatch();
  const listProCart = useAppSelector(state => state.listProCart);
  const showCart = listProCart.map((item, index) => {
    return (
      <table style={{ margin: '10px auto' }}>
        <tr>
            <td  style={{ width: "150px" }}>{item.name}</td>
            <td style={{ width: '200px' }} >
              <img src={item.image} alt='' style={{ width: '90px', height: '90px' }}></img>
            </td>
            <td  style={{ width: "100px" }}>{item.price}</td>
            <td  style={{ width: "100px" }}>
              <MinusOutlined style={{ border: '1px solid black', fontSize: '12px' }} />
              <span style={{ margin: '5px 10px' }}>{item.count}</span>
              <PlusOutlined style={{ border: '1px solid black', fontSize: '12px' }} />
            </td >
            <td  style={{ width: "150px" }}>{item.price}*{item.count}</td>
          </tr>
      </table>
    )
  });
  return (
    <div>
      <h4 style={{
        fontFamily: 'cursive', color: 'red', margin: '20px'
      }}>Giỏ hàng của bạn</h4>
      <div>
        <table style={{ margin: '10px auto' }}>
          <tr>
            <th style={{ width: "150px" }}>Tên sản phẩm</th>
            <th style={{ width: "200px" }}>Hình ảnh</th>
            <th style={{ width: "100px" }}>Giá</th>
            <th style={{ width: "100px" }}>Số lượng</th>
            <th style={{ width: "150px" }}>Thành tiền</th>
          </tr>
        </table>
        {showCart}
      </div>
    </div>
  )
}
