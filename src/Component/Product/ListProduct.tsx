import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hook'
import string from '../../Constants/String';
import { getAllProduct, getAllProduct2 } from '../../Redux/ProductSlice';
import { ProductType } from '../../DataType/ProductType';

export default function AddNewProduct() {
    const dispath = useAppDispatch();
    const listData = useAppSelector(state => state.listProduct);
    useEffect(() => {
        dispath(getAllProduct())
    }, [])
    const listSanPham: ProductType[] = listData.listProduct
    var showListSanPham = listSanPham.map((item, index) => {
        return (
            <div>
                <table style={{ margin: '5px auto' }}>
                    <tr>
                        <td style={{ width: '30px' }}>{item.id}</td>
                        <td style={{ width: '300px' }}>{item.name}</td>
                        <td style={{ width: '300px' }}>{item.price}</td>
                        <td style={{ width: '300px' }}>{item.init}</td>
                        <td style={{ width: '100px' }}>
                            <img src={item.image} alt='' style={{ width: '90px', height: '90px' }}></img>
                        </td>
                        <td style={{ width: '100px' }}>
                            <input className='inputButton' type='button' value="Add" style={{
                                borderRadius: '5px', border: 'none', backgroundColor: 'green', color: 'white', padding: '0px 15px'
                            }}></input>
                        </td>
                    </tr>
                </table>
            </div>
        )
    })
    return (
        <div>
            <h3 style={{ margin: '20px auto' }}>{string.ListProduct}</h3>
            <table style={{ margin: '5px auto' }}>
                <tr style={{ fontWeight: 'bold' }}>
                    <td style={{ width: '30px' }}>ID</td>
                    <td style={{ width: '300px' }}>Name</td>
                    <td style={{ width: '300px' }}>Price</td>
                    <td style={{ width: '300px' }}>Init</td>
                    <td style={{ width: '100px' }}>Image</td>
                    <td style={{ width: '100px' }}>Buy</td>
                </tr>
            </table>
            {listSanPham ? showListSanPham : ""}
        </div>
    )
}
