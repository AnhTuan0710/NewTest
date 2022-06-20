import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../App/hook';
import string from '../../Constants/String';
import { addPro, deletePro, editPro, editTru } from '../../Redux/CartSlice';
import { addReceipt } from '../../Redux/ReceiptSlice';


export default function Purchase() {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const address = localStorage.getItem('userAddress')
    const idUser = localStorage.getItem('access_token')
    const userAddress = localStorage.getItem('userAddress')
    const listProCart = useAppSelector(state => state.listProCart);
    let total = 0;

    const showCart = listProCart.map((item, index) => {
        const money = Number(item.price) * Number(item.count)
        total += money;
        return (
            <table style={{ margin: '10px auto' }} key={index}>
                <tr>
                    <td style={{ width: "150px" }}>{item.name}</td>
                    <td style={{ width: '200px' }} >
                        <img src={item.image} alt='' style={{ width: '90px', height: '90px' }}></img>
                    </td>
                    <td style={{ width: "100px" }}>{item.price}</td>
                    <td style={{ width: "100px" }}>
                        <span >
                            <MinusOutlined style={{ border: '1px solid black' }} onClick={() => {
                                if (item.count === 1) {
                                    dispatch(deletePro(item.id))
                                } else {
                                    dispatch(editTru(item.id, item.name, item.image, item.price, item.count));
                                }
                            }}
                            ></MinusOutlined>
                        </span>
                        <input type='text' value={item.count} style={{ width: '25px', margin: "0px 10px" }}></input>
                        <span>
                            <PlusOutlined style={{ border: '1px solid black' }} onClick={() => {
                                dispatch(editPro(item.id, item.name, item.image, item.price, item.count));
                            }}
                            ></PlusOutlined>
                        </span>
                    </td >
                    <td style={{ width: "150px" }}>{money}</td>
                    <td style={{ width: "100px" }}>
                        <button onClick={() => {
                            dispatch(deletePro(item.id))
                        }} style={{ border: 'none', backgroundColor: 'red', color: 'white' }}>Xóa</button>
                    </td>
                </tr>
            </table>
        )
    });

    const handleSubmit = () => {
        if (idUser === null) {
            alert('Đăng nhập để mua hàng')
        } else if (listProCart.length === 0) {
            alert('Chưa có sản phẩm trong giỏ hàng')
        }
        else {
            dispatch(addReceipt(listProCart, idUser || '1', userAddress || '1', total))
            navigate('/receipt')
        }
    }
    return (
        <div>
            <h4 style={{
                fontFamily: 'cursive', color: 'red', margin: '20px'
            }}>{string.YourCart}</h4>
            <div>
                <table style={{ margin: '10px auto' }}>
                    <tr>
                        <th style={{ width: "150px" }}>Tên sản phẩm</th>
                        <th style={{ width: "200px" }}>Hình ảnh</th>
                        <th style={{ width: "100px" }}>Giá</th>
                        <th style={{ width: "100px" }}>Số lượng</th>
                        <th style={{ width: "150px" }}>Thành tiền</th>
                        <th style={{ width: "100px" }}>Hủy</th>
                    </tr>
                </table>
                {showCart}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div>
                    <Button><Link to='/'>{string.ChooseProduct}</Link></Button>
                </div>
                <p style={{ color: 'blue', fontWeight: 'bold' }}>{string.TotalPay} <span style={{ color: 'red' }}>{total.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span> VND</p>
            </div>
            <div style={{ margin: '15px' }}>
                <h4 style={{ fontFamily: 'cursive' }}>{string.Address}</h4>
                <p>{string.InforAddress} <span style={{ fontWeight: 'bold', color: 'blue' }}>{address}</span></p>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around'
            }}>
                <div>
                    <Button><Link to="/receipt">{string.SeeBill}</Link></Button>
                </div>
                <div>
                    <Button onClick={handleSubmit}>{string.ConfirmOrder}</Button>
                </div>
            </div>
        </div>
    )
}
