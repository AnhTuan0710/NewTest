import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, {useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hook'
import { getAllProduct } from '../../Feature/ProductSlice';
import { SanPhamType } from '../../TypeState/ProductType';

export default function AddProduct()  {
  const dispath= useAppDispatch();
  const listData = useAppSelector(state => state.listProduct);
  useEffect(() => {
    dispath(getAllProduct())
  }, [])
  const listSanPham:SanPhamType[] = listData.listProduct
  var showListSanPham = listSanPham.map((item, index) =>{
      return (
           <div>
             <table style={{margin: '5px auto'}}>
               <tr>
                 <td style={{width: '30px'}}>{item.id}</td>
                 <td style={{width: '200px'}}>{item.name}</td>
                 <td style={{width: '200px'}}>{item.price}</td>
                 <td style={{width: '200px'}}>{item.init}</td>
                 <td style={{width: '100px'}}>
                   <img src={item.image} alt='' style={{width:'90px', height:'90px'}}></img>
                 </td>
                 <td style={{width: '100px'}}>              
                       <EditOutlined style={{color: 'darkblue'}}/> 
                 </td>
                 <td style={{width: '100px'}}>
                   <DeleteOutlined style={{color: 'darkred'}}/>
                 </td>
               </tr>
             </table>
           </div>
      )
    })
    return (
      <div>
        <h3 style={{margin: '20px auto'}}>DANH SÁCH SẢN PHẨM</h3>
        <div style={{textAlign: 'left', margin: '20px 30px '}}>
            
            <PlusSquareOutlined />Thêm sản phẩm mới
           
        </div>
        <table style={{margin: '5px auto'}}>
               <tr style={{fontWeight:'bold'}}>
                 <td style={{width: '30px'}}>ID</td>
                 <td style={{width: '200px'}}>Name</td>
                 <td style={{width: '200px'}}>Price</td>
                 <td style={{width: '200px'}}>Init</td>
                 <td style={{width: '100px'}}>Image</td>
                 <td style={{width: '100px'}}>Update</td>
                 <td style={{width: '100px'}}>Delete</td>
               </tr>
             </table>
        {listSanPham? showListSanPham: ""}
      </div>
    )
}
