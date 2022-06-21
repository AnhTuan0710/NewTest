import { CheckCircleOutlined, CheckSquareOutlined, DeleteOutlined, EditOutlined, PlusOutlined, PlusSquareOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hook'
import { getAllProduct, deleteProduct, getAllProduct2 } from '../../Redux/ProductSlice';
import { ProductType } from '../../DataType/ProductType';
import 'antd/dist/antd.css';
import { apiAddPro, apiKind } from '../../Api/medicine';
import string from '../../Constants/String';
import { BoxButonUnit, BoxEmpty, BoxImage, BoxInfor, BoxInput, BoxInputInfo, BoxInputInfoLeft, BoxInputInforRight, BoxListUnit, BoxModal, BoxModalPopup, BoxShowList, BoxTitle, BoxUnit, BoxUploadImage, InputAddUnit, InputCancelUnit, InputYeslUnit, LaybalStyle, TextInforAdvanced, TextInforBase } from '../../Style/Addproduct';
import { getAllKind } from '../../Redux/KindSlice';
import { getAllGround } from '../../Redux/GroupSlice';
import { ObjectProductAddType } from '../../DataType/ObjectProductAddType';
import axios from 'axios';
import { getKindFetch } from '../../Redux/saga/Kind';
import { KindType } from '../../DataType/KinhType';

type DrugUnit = {
    active_flg: number,
    default_flg: number,
    drug_id: number,
    drug_price_id: number,
    drug_unit_id: number,
    inv_qty_alarm: number,
    max_price: number,
    parent_unit: number,
    parent_unit_name: string,
    price: number,
    price_before_vat: number,
    unit_id: number,
    status: number,
    unit_name: string,
    unit_qty: number,
    wholesale_price: number,
    wholesale_price_before_vat: number,
}
type Data = {
    account_id: number,
    active_flg: number,
    active_ingredient: string,
    drg_drug_name: string,
    administration: string,
    adverse_reaction: string,
    atc_code: string,
    avatar_url: string,
    barcode_url: string,
    company_code: string,
    company_name: string,
    concentration: string,
    contraindication: string,
    country: string,
    created_date: string,
    description: string,
    direction_for_use: string,
    dosage: string,
    drg_barcode: string,
    drg_drug_alias: string,
    drg_drug_cd: string,
    drg_ref_cd: string,
    drug_classified: string,
    drug_flg: string,
    drug_group: string,
    drug_id: number,
    drug_kind: string,
    employee_commissions: number,
    image_number: number,
    image_url: string,
    indication: string,
    interation: string,
    key: 0,
    license_cd: string,
    drug_units: DrugUnit[],
    loyalty_flg: number,
    moisture: string,
    note: string,
    original_product: string,
    overdosage: string,
    package_desc: string,
    precaution: string,
    prefix: string,
    provider_code: string,
    provider_name: string,
    ref_code: string,
    revision: number,
    source: string,
    special_control: string,
    status: number,
    storage_temperature: string,
    updated_date: string,
    updated_user: string,
    validate: boolean,
    vat_percent: number,
}
const listUnit: DrugUnit[] = [
    {
        active_flg: 1,
        default_flg: 1,
        drug_id: 1047653,
        drug_price_id: 1216170,
        drug_unit_id: 2358051,
        inv_qty_alarm: 0,
        max_price: 10000,
        parent_unit: 14,
        parent_unit_name: "Không",
        price: 0,
        price_before_vat: 0,
        unit_id: 14,
        status: 1,
        unit_name: 'Viên',
        unit_qty: 0,
        wholesale_price: 0,
        wholesale_price_before_vat: 0,
    },
    {
        active_flg: 1,
        default_flg: 0,
        drug_id: 1047653,
        drug_price_id: 1216171,
        drug_unit_id: 2358052,
        inv_qty_alarm: 0,
        max_price: 10000,
        parent_unit: 14,
        parent_unit_name: "không",
        price: 0,
        price_before_vat: 0,
        unit_id: 17,
        unit_name: 'Túi',
        status: 1,
        unit_qty: 0,
        wholesale_price: 0,
        wholesale_price_before_vat: 0,
    },
    {
        active_flg: 1,
        default_flg: 0,
        drug_id: 1047653,
        drug_price_id: 1216172,
        drug_unit_id: 2358053,
        inv_qty_alarm: 0,
        max_price: 10000,
        parent_unit: 14,
        parent_unit_name: 'cố',
        price: 0,
        price_before_vat: 0,
        unit_id: 27,
        status: 1,
        unit_name: 'Tép',
        unit_qty: 0,
        wholesale_price: 0,
        wholesale_price_before_vat: 0,
    }
]

export default function AddProduct() {
    const dispath = useAppDispatch();
    const listData = useAppSelector(state => state.listProduct);
    const listGroup = useAppSelector(state => state.listGroup)

    useEffect(() => {
      dispath(getKindFetch())
    }, [dispath]);
    
    const listKindSaga:KindType[] = useAppSelector(state => state.kinds.kinds)
    console.log(listKindSaga);
    const user = useAppSelector(state => state.listUser)
    if (user !== []) {
        const n = user.length
    }
    const listKind = useAppSelector(state => state.listKind)
    useEffect(() => {
        dispath(getAllKind())
        dispath(getAllGround())
    }, [])
    const listGroupNew= [...listGroup.listGround]
    const listKindNew= [...listKind.listKind]
    const [display, setDispaly] = useState('none');
    const [listDv, setListDv] = useState<DrugUnit[]>([]);
    const acess_tokken = localStorage.getItem('access_token')
    const initStatedrug_Init: DrugUnit = {
        active_flg: 1,
        default_flg: 1,
        drug_id: 0,
        drug_price_id: 0,
        drug_unit_id: 0,
        inv_qty_alarm: 0,
        max_price: 0,
        parent_unit: 2,
        parent_unit_name: "",
        price: 0,
        price_before_vat: 0,
        unit_id: 2,
        status: 1,
        unit_name: "",
        unit_qty: 1,
        wholesale_price: 0,
        wholesale_price_before_vat: 0,
    };
    const [listKindApi, setListKindApi] = useState([])
    const getListKind = async () => {
        try{
            const res = await apiKind()
            setListKindApi(res.data)
        }
        catch(error){
            console.log(error);
        }
    };
    
    const [dataArray, setDataArray] = useState(initStatedrug_Init);
    const onChangeUnit = (e: any, index: number) => {
        const B = [...listDv]
        if (typeof (e) === 'object') {
            if (e.target.name === 'inv_qty_alarm') {
                B[index].inv_qty_alarm = Number(e.target.value)
            }
            else if (e.target.name === 'price') {
                B[index].price = Number(e.target.value)
                B[index].price_before_vat = B[index].price
            }
            else if (e.target.name === 'unit_qty') {
                B[index].unit_qty = Number(e.target.value)
            }
        }
        else {
            B[index].unit_name = e
            B[index].parent_unit_name = e

            const unit = listUnit.find(c => c.unit_name === e);
            if (unit !== undefined) {
                B[index].unit_id = (unit.unit_id)
            }
        }
        setListDv(B)
    }
    const handleAddDV = () => {
        setListDv(pre => {
            const test = [...pre]
            test.push(JSON.parse(JSON.stringify(dataArray)))
            return test
        });
    }

    const initState: Data = {
        account_id: 0,
        active_flg: 1,
        active_ingredient: '',
        drg_drug_name: '',
        administration: '',
        adverse_reaction: "",
        atc_code: "",
        avatar_url: "",
        barcode_url: "",
        company_code: "",
        company_name: "",
        concentration: "",
        contraindication: "",
        country: "",
        created_date: "",
        description: "",
        direction_for_use: "",
        dosage: "",
        drg_barcode: "",
        drg_drug_alias: "",
        drg_drug_cd: "",
        drg_ref_cd: "",
        drug_classified: "",
        drug_flg: "",
        drug_group: "",
        drug_id: 0,
        drug_kind: "",
        employee_commissions: 0,
        image_number: 0,
        image_url: "",
        indication: "",
        interation: "",
        key: 0,
        license_cd: "",
        drug_units: [] as DrugUnit[],
        loyalty_flg: 0,
        moisture: "",
        note: "",
        original_product: "",
        overdosage: "",
        package_desc: "",
        precaution: "",
        prefix: "S",
        provider_code: "",
        provider_name: "",
        ref_code: "",
        revision: 0,
        source: "",
        special_control: "",
        status: 1,
        storage_temperature: "",
        updated_date: "",
        updated_user: "nguyen danh khanh",
        validate: true,
        vat_percent: 5,
    };
    const [data, setData] = useState(initState);
    const {
        account_id,
        active_flg,
        active_ingredient,
        drg_drug_name,
        administration,
        adverse_reaction,
        atc_code,
        avatar_url,
        barcode_url,
        company_code,
        company_name,
        concentration,
        contraindication,
        country,
        created_date,
        description,
        direction_for_use,
        dosage,
        drg_barcode,
        drg_drug_alias,
        drg_drug_cd,
        drg_ref_cd,
        drug_classified,
        drug_flg,
        drug_group,
        drug_id,
        drug_kind,
        employee_commissions,
        image_number,
        image_url,
        indication,
        interation,
        key,
        license_cd,
        loyalty_flg,
        moisture,
        note,
        original_product,
        overdosage,
        package_desc,
        precaution,
        prefix,
        provider_code,
        provider_name,
        ref_code,
        revision,
        source,
        special_control,
        status,
        storage_temperature,
        updated_date,
        updated_user,
        validate,
        vat_percent,
    } = data;

    const onChangeText = (e: any) => {
        setData({
            ...data,
            active_ingredient: active_ingredient,
            company_name: company_name,
            concentration: concentration,
            description: description,
            drg_barcode: drg_barcode,
            drg_drug_cd: drg_drug_cd,
            drg_drug_name: drg_drug_name,
            drg_ref_cd: drg_ref_cd,
            vat_percent: vat_percent,
            package_desc: package_desc,
            [e.target.id]: e.target.value,
        })
    };
    useEffect(() => {
        getListKind()
    }, [])
    const onChangeKind = (e:any) => {
        setData({
            ...data,
            drug_kind: e,
        })
    }
    const onChangeGroup = (e:any) => {
        setData({
            ...data,
            drug_group: e,
        })
    }
    const handleClose = () => {
        setDispaly('none')
        setListDv([])
    }
    const handleAdd = () => {
        setDispaly('block')
    }
    
    const handleYes = async () => {
        data.drug_units = listDv
        data.vat_percent = Number(data.vat_percent)
        const new_drugs: Data[] = [];
        new_drugs.push(data)
        const dataObject : ObjectProductAddType = {
            new_drugs
        };
        try {
            const res = await apiAddPro(dataObject,acess_tokken)
            if (res.status === 200) {
                alert('Thêm thành công sản phẩm')
            }
        }
        catch (err) {
            console.log(err);
            console.log('123');
            console.log(data);
        }
    }
    useEffect(() => {
        dispath(getAllProduct())
    }, [])

    var showList = listDv.map((item, index) => {
        return (
            <BoxShowList key={index}>
                <div>
                    {index === 0 ? <div className='p-1 fw-bold mx-2'>Đơn vị cơ bản </div> : <div className='p-1 fw-bold'>Đơn vị quy đổi {index}</div>}
                </div>
                <div>
                    <Select id='parent_unit_name' style={{ width: '200px' }} onChange={(e: any) => { onChangeUnit(e, index) }}>
                        {listUnit.map((itemUnit, indexUnit) => {
                            return (
                                <Select.Option value={itemUnit.unit_name}>{itemUnit.unit_name}</Select.Option>
                            )
                        })}
                    </Select>
                </div>
                <div>
                    {index === 0
                        ? <Input
                            style={{ borderRadius: '5px' }}
                            onChange={(e: any) => onChangeUnit(e, index)}
                            name='unit_qty'
                            disabled={true}
                            value={1}>
                        </Input>
                        : <Input value={item.unit_qty} style={{ borderRadius: '5px' }} onChange={(e: any) => onChangeUnit(e, index)} name='unit_qty'></Input>}
                </div>
                <div>
                    <Input style={{ borderRadius: '5px' }} onChange={(e: any) => onChangeUnit(e, index)} name='price'
                        value={item.price}>
                    </Input>
                </div>
                <div>
                    <Input style={{ borderRadius: '5px' }} onChange={(e: any) => onChangeUnit(e, index)} name='inv_qty_alarm'
                        value={item.inv_qty_alarm}>
                    </Input>
                </div>
                <div className='text-danger'>
                    {index === 0 ? <CheckSquareOutlined /> :
                        <DeleteOutlined onClick={() => {
                            setListDv(pre => {
                                const newListDv = [...pre]
                                newListDv.splice(index, 1)
                                return newListDv
                            })
                        }} />}
                </div>
            </BoxShowList>
        )
    })
    const listSanPham: ProductType[] = listData.listProduct
    var showListSanPham = listSanPham.map((item, index) => {
        return (
            <div key={index}>
                <table style={{ margin: '5px auto' }}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30px' }}>{item.id}</td>
                            <td style={{ width: '200px' }}>{item.name}</td>
                            <td style={{ width: '200px' }}>{item.price}</td>
                            <td style={{ width: '200px' }}>{item.init}</td>
                            <td style={{ width: '100px' }}>
                                <img src={item.image} alt='' style={{ width: '90px', height: '90px' }}></img>
                            </td>
                            <td style={{ width: '100px' }}>
                                <EditOutlined style={{ color: 'darkblue' }} />
                            </td>
                            <td style={{ width: '100px' }}>
                                <DeleteOutlined style={{ color: 'darkred' }} onClick={() => {
                                    alert('Xóa sản phâm thành công')
                                    dispath(deleteProduct(item.id))
                                }} />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        )
    })
    return (
        <div >
            <h3 style={{ marginTop: '30px' }}>{string.ListProduct}</h3>
            <div style={{ textAlign: 'left', margin: '20px 30px ' }}>
                <div onClick={handleAdd}>
                    <PlusSquareOutlined />{string.AddnewProduct}
                </div>
                <div style={{ display: `${display}` }} >
                    <BoxModal>
                        <BoxModalPopup>
                            <BoxTitle>
                                <p>{string.CreateProduct}</p>
                            </BoxTitle>
                            <BoxUploadImage>
                                <BoxImage>
                                    <PlusOutlined />
                                    <br></br>
                                    {string.UploadImage}
                                </BoxImage>
                            </BoxUploadImage>
                            <div>
                                <BoxInfor >
                                    <TextInforBase > Thông tin cơ bản</TextInforBase>
                                    <TextInforAdvanced >Thông tin nâng cao</TextInforAdvanced>
                                </BoxInfor>
                                <BoxInputInfo>
                                    <BoxInputInfoLeft>
                                        <BoxInput>
                                            <LaybalStyle>Mã thuốc: </LaybalStyle>
                                            <Input onChange={onChangeText} id='drg_drug_cd' placeholder='Mã thuốc (Nhà thuốc tự định nghĩa )' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle><span className='text-danger'>* </span>Tên thuốc: </LaybalStyle>
                                            <Input placeholder='Nhập tên thuốc' onChange={onChangeText} id="drg_drug_name" style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle >Hàm lượng: </LaybalStyle>
                                            <Input placeholder='Nhập hàm lượng thuốc' onChange={onChangeText} id='concentration' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Hoạt chất: </LaybalStyle>
                                            <Input placeholder='Nhập hoạt chất thuốc' onChange={onChangeText} id='active_ingredient' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Quy cách đóng gói: </LaybalStyle>
                                            <Input placeholder='Nhập quy cách đóng gói' onChange={onChangeText} id='package_desc' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Số đăng kí: </LaybalStyle>
                                            <Input placeholder='Nhập số đăng kí' onChange={onChangeText} id='license_cd' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Tiền tố: </LaybalStyle>
                                            <Input onChange={onChangeText} id='prefix' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                            <CheckCircleOutlined style={{
                                                backgroundColor: "rgb(115,192,78)",
                                                border: "none",
                                                borderRadius: '50%',
                                                color: 'white',
                                                marginLeft: "-25px",
                                                zIndex: '1',
                                                marginTop: '10px',
                                                fontSize: '15px',
                                                height: '15px',
                                                alignItems: 'center'
                                            }} />
                                        </BoxInput>
                                    </BoxInputInfoLeft>
                                    <BoxInputInforRight>
                                        <BoxInput >
                                            <LaybalStyle>Ngành hàng: </LaybalStyle>
                                            <Select value={drug_kind}  id='drug_kind' style={{ width: '70%', flex: 'right' }}  onChange={onChangeKind}>
                                                {
                                                    listKindSaga.map((item, index) => {
                                                        return (
                                                            <Select.Option  key={index} value={item.code}>{item.name}</Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>Phân nhóm: </LaybalStyle>
                                            <Select value={drug_group} id='drug_group' style={{ width: '70%', flex: 'right' }}  onChange={onChangeGroup}>
                                                {
                                                    listGroupNew.map((item, index) => {
                                                        return (
                                                            <Select.Option key={index}  value={item.code}>{item.name}</Select.Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>Bào chế: </LaybalStyle>
                                            <Select id='description' style={{ width: '70%', flex: 'right' }}>
                                                <Select.Option id='duocMyPham' value='duocMyPham'>Dược mỹ phẩm</Select.Option>
                                                <Select.Option id='khac' value='khac'>Khác</Select.Option>
                                                <Select.Option id='lamDep' value='lamDep'>Làm đẹp</Select.Option>
                                            </Select>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>Mã vạch: </LaybalStyle>
                                            <Input placeholder='Nhập mã vạch' onChange={onChangeText} id='drg_barcode' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>Mã dược quốc gia: </LaybalStyle>
                                            <Input placeholder='Nhập mã dược quốc gia' onChange={onChangeText} id='drg_ref_cd' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>Hãng sản xuất: </LaybalStyle>
                                            <Input placeholder='Nhập hãng sản xuất' onChange={onChangeText} id='company_name' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>Thuế VAT %: </LaybalStyle>
                                            <Input placeholder='0%' onChange={onChangeText} id='vat_percent' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                            <CheckCircleOutlined style={{
                                                backgroundColor: "rgb(115,192,78)",
                                                border: "none",
                                                borderRadius: '50%',
                                                color: 'white',
                                                marginLeft: "-25px",
                                                zIndex: '1',
                                                marginTop: '10px',
                                                fontSize: '15px',
                                                height: '15px',
                                                alignItems: 'center'
                                            }} />
                                        </BoxInput>
                                    </BoxInputInforRight>
                                </BoxInputInfo>
                            </div>
                            <div>
                                <BoxUnit>
                                    <p>Loại đơn vị</p>
                                    <p>Đơn vị</p>
                                    <p>Giá trị quy đổi</p>
                                    <p>Giá bán lẻ</p>
                                    <p>Cảnh báo tồn kho</p>
                                </BoxUnit>
                                <BoxListUnit>
                                    {
                                        listDv.length === 0 ? (
                                            <BoxEmpty>
                                                Trống
                                            </BoxEmpty>) : showList
                                    }
                                </BoxListUnit>
                            </div>
                            <div className="m-2">
                                <div>
                                    <InputAddUnit onClick={handleAddDV} type="button" value='Thêm đơn vị'></InputAddUnit>
                                </div>
                            </div>
                            <hr></hr>
                            <BoxButonUnit >
                                <div onClick={handleClose}>
                                    <InputCancelUnit type="button" value='Hủy bỏ'></InputCancelUnit>
                                </div>
                                <div onClick={handleYes}>
                                    <InputYeslUnit type="button" value='Đồng ý'></InputYeslUnit>
                                </div>
                            </BoxButonUnit>
                        </BoxModalPopup>
                    </BoxModal>
                </div>
            </div>
            <table style={{ margin: '5px auto' }}>
                <thead></thead>
                <tbody>
                    <tr style={{ fontWeight: 'bold' }}>
                        <td style={{ width: '30px' }}>ID</td>
                        <td style={{ width: '200px' }}>Name</td>
                        <td style={{ width: '200px' }}>Price</td>
                        <td style={{ width: '200px' }}>Init</td>
                        <td style={{ width: '100px' }}>Image</td>
                        <td style={{ width: '100px' }}>Update</td>
                        <td style={{ width: '100px' }}>Delete</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
            {listSanPham ? showListSanPham : ""}


        </div>
    )
}
