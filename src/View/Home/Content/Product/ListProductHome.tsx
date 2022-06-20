import { count } from 'console';
import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../App/hook'
import string from '../../../../Constants/String';
import { addPro, editPro } from '../../../../Redux/CartSlice';
import { getAllProduct } from '../../../../Redux/ProductSlice';
import { ProductType } from '../../../../DataType/ProductType';
import { BoxListPro, BoxProduct, ButtonAddCart } from '../../../../Style/ListProductHome';

export default function ListProductHome() {
    const dispatch = useAppDispatch();
    const listData = useAppSelector(state => state.listProduct);
    const listproCart = useAppSelector(state => state.listProCart);
    const login = localStorage.getItem('access_token')
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllProduct())
    }, []);
    const loaiSP: ProductType[] = listData.listProduct
    const showProduct = loaiSP.map((item, index) => {
        return (
            <BoxProduct key={index}>
                <img alt='' src={item.image} style={{ width: "290px", height: "250px", marginTop: '10px', borderRadius: '5px'}} >
                </img>
                <span className='fs-4 fw-bold'>{item.name}</span>
                <p>Gia: <span className='text-danger'> {item.price}</span></p>
                <p>Don vi: <span className='text-primary'> {item.init}</span></p>
                <ButtonAddCart onClick={() => {
                    if (login === null) {
                        alert('Bạn cần đăng nhập để mua hàng')
                        navigate('/login')
                    } else {
                        const resuiltFind = listproCart.find(el => el.name === item.name)
                        console.log(resuiltFind);
                        if (resuiltFind === undefined) {
                            dispatch(addPro(item.name, item.image, item.price, 1));
                            navigate('/cart')
                        }
                        else {
                            console.log(listproCart);
                            for (let i = 0; i < listproCart.length; i++) {
                                if (listproCart[i].name === item.name) {
                                    dispatch(editPro(listproCart[i].id, listproCart[i].image, listproCart[i].name, listproCart[i].price, listproCart[i].count))
                                    navigate('/cart')
                                }
                                else {
                                    console.log('acn');
                                }
                            }
                        }
                    }
                }}
                >Add to cart</ButtonAddCart>
            </BoxProduct>
        )
    });
    return (
        <div className='listSanpham'>
            <h4 className='text-dark mt-3'>{string.ListProduct}</h4>
            <BoxListPro>
                {loaiSP ? showProduct : ""}
            </BoxListPro>
        </div>
    )
}
