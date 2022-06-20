import { Button } from 'antd';
import React from 'react'
import { Link} from 'react-router-dom';
import { useAppSelector } from '../../App/hook';
import string from '../../Constants/String';
import { ReceiptType } from '../../Redux/ReceiptSlice';

export default function Order() {
    const listReceipts = useAppSelector(state => state.listReceipt);
    const _showReceipt = (item: ReceiptType, index: number) => (
        <div style={{ margin: '10px auto' }}>
            <h4 style={{ fontFamily: 'cursive', color: 'blue' }}>{string.Don_hang} <span>{index + 1}</span></h4>
            <table style={{ margin: '10px auto' }}>
                <tr>
                    <th>Mã hóa đơn</th>
                    <th style={{width: '250px'}}>Mã khách hàng</th>
                    <th>Sản phẩm</th>
                    <th>Địa chỉ</th>
                    <th>Thanh toán</th>
                </tr>
                <tr>
                    <td style={{ padding: "10px" }} >{item.id}</td>
                    <td style={{width: '150px'}}> {item.idUser.length > 100 ? ('************'): (item.idUser)} </td>
                    <td >
                        <tr>
                            <td>Tên sản phẩm</td>
                            <td>Hình ảnh</td>
                            <td>Gía</td>
                            <td>Số lượng</td>
                        </tr>
                        {item.idSP.map((itemSP, indexSP) => {
                            return (
                                <tr>
                                    <td>{itemSP.name}</td>
                                    <td><img src={itemSP.image} alt='' style={{ width: '100px' }} /> </td>
                                    <td>{itemSP.price}</td>
                                    <td>{itemSP.count}</td>
                                </tr>
                            )
                        })}
                    </td>
                    <td style={{ padding: "10px" }}> {item.address}</td>
                    <td style={{ padding: "10px" }}> <span style={{ color: "black", fontWeight: 'bold' }}>{item.totalPrice.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></td>
                </tr>
            </table>
        </div>
    )

    return (
        <div>
            <h4 style={{ fontFamily: 'cursive', color: 'red', margin: '20px' }}>
                Thông tin đơn hàng
            </h4>
            {listReceipts.map((item, index) => _showReceipt(item, index))}
            <div>
                <Button>
                    <Link to='/cart'>Trở lại</Link>
                </Button>
            </div>
        </div>
    )
}

