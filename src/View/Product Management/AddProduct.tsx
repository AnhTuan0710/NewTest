import { CheckCircleOutlined, CheckSquareOutlined, DeleteOutlined, EditOutlined, PlusOutlined, PlusSquareOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../App/hook'
import { getAllProduct, deleteProduct } from '../../Redux/ProductSlice';
import { ProductType } from '../../DataType/ProductType';
import 'antd/dist/antd.css';
import { apiAddPro } from '../../Api/medicine';
import string from '../../Constants/String';
import { BoxButonUnit, BoxEmpty, BoxImage, BoxInfor, BoxInput, BoxInputInfo, BoxInputInfoLeft, BoxInputInforRight, BoxListUnit, BoxModal, BoxModalPopup, BoxShowList, BoxTitle, BoxUnit, BoxUploadImage, InputAddUnit, InputCancelUnit, InputYeslUnit, LaybalStyle, TextInforAdvanced, TextInforBase } from '../../Style/Addproduct';

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
        parent_unit_name: "Kh??ng",
        price: 0,
        price_before_vat: 0,
        unit_id: 14,
        status: 1,
        unit_name: 'Vi??n',
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
        parent_unit_name: "kh??ng",
        price: 0,
        price_before_vat: 0,
        unit_id: 17,
        unit_name: 'T??i',
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
        parent_unit_name: 'c???',
        price: 0,
        price_before_vat: 0,
        unit_id: 27,
        status: 1,
        unit_name: 'T??p',
        unit_qty: 0,
        wholesale_price: 0,
        wholesale_price_before_vat: 0,
    }
]

export default function AddProduct() {
    const dispath = useAppDispatch();
    const listData = useAppSelector(state => state.listProduct);
    const user = useAppSelector(state => state.listUser)
    console.log(user === []);

    if (user !== []) {
        const n = user.length
        // console.log(user[n-1].userTokken);
    }

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
            drug_group: drug_group,
            drug_kind: drug_kind,
            vat_percent: vat_percent,
            package_desc: package_desc,
            [e.target.id]: e.target.value,
        });
    };
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
        const new_drugs = [];
        new_drugs.push(data)
        const dataList = {
            new_drugs
        };
        try {
            const res = await apiAddPro(dataList, acess_tokken)
            if (res.status === 200) {
                alert('Th??m th??nh c??ng s???n ph???m')
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
                    {index === 0 ? <div className='p-1 fw-bold mx-2'>????n v??? c?? b???n </div> : <div className='p-1 fw-bold'>????n v??? quy ?????i {index}</div>}
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
            <div>
                <table style={{ margin: '5px auto' }}>
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
                                alert('X??a s???n ph??m th??nh c??ng')
                                dispath(deleteProduct(item.id))
                            }} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    })
    return (
        <div>
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
                                    <TextInforBase > Th??ng tin c?? b???n</TextInforBase>
                                    <TextInforAdvanced >Th??ng tin n??ng cao</TextInforAdvanced>
                                </BoxInfor>
                                <BoxInputInfo>
                                    <BoxInputInfoLeft>
                                        <BoxInput>
                                            <LaybalStyle>M?? thu???c: </LaybalStyle>
                                            <Input onChange={onChangeText} id='drg_drug_cd' placeholder='M?? thu???c (Nh?? thu???c t??? ?????nh ngh??a )' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle><span className='text-danger'>* </span>T??n thu???c: </LaybalStyle>
                                            <Input placeholder='Nh???p t??n thu???c' onChange={onChangeText} id="drg_drug_name" style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle >H??m l?????ng: </LaybalStyle>
                                            <Input placeholder='Nh???p h??m l?????ng thu???c' onChange={onChangeText} id='concentration' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Ho???t ch???t: </LaybalStyle>
                                            <Input placeholder='Nh???p ho???t ch???t thu???c' onChange={onChangeText} id='active_ingredient' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Quy c??ch ????ng g??i: </LaybalStyle>
                                            <Input placeholder='Nh???p quy c??ch ????ng g??i' onChange={onChangeText} id='package_desc' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >S??? ????ng k??: </LaybalStyle>
                                            <Input placeholder='Nh???p s??? ????ng k??' onChange={onChangeText} id='license_cd' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle >Ti???n t???: </LaybalStyle>
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
                                            <LaybalStyle>Ng??nh h??ng: </LaybalStyle>
                                            <Select id='drug_kind' style={{ width: '70%', flex: 'right' }}>
                                                <Select.Option id='duocMyPham' value='duocMyPham'>D?????c m??? ph???m</Select.Option>
                                                <Select.Option id='khac' value='khac'>Kh??c</Select.Option>
                                                <Select.Option id='lamDep' value='lamDep'>L??m ?????p</Select.Option>
                                            </Select>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>Ph??n nh??m: </LaybalStyle>
                                            <Select id='drug_group' style={{ width: '70%', flex: 'right' }}>
                                                <Select.Option id='duocMyPham' value='duocMyPham'>D?????c m??? ph???m</Select.Option>
                                                <Select.Option id='khac' value='khac'>Kh??c</Select.Option>
                                                <Select.Option id='lamDep' value='lamDep'>L??m ?????p</Select.Option>
                                            </Select>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>B??o ch???: </LaybalStyle>
                                            <Select id='description' style={{ width: '70%', flex: 'right' }}>
                                                <Select.Option id='duocMyPham' value='duocMyPham'>D?????c m??? ph???m</Select.Option>
                                                <Select.Option id='khac' value='khac'>Kh??c</Select.Option>
                                                <Select.Option id='lamDep' value='lamDep'>L??m ?????p</Select.Option>
                                            </Select>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>M?? v???ch: </LaybalStyle>
                                            <Input placeholder='Nh???p m?? v???ch' onChange={onChangeText} id='drg_barcode' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput >
                                            <LaybalStyle>M?? d?????c qu???c gia: </LaybalStyle>
                                            <Input placeholder='Nh???p m?? d?????c qu???c gia' onChange={onChangeText} id='drg_ref_cd' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>H??ng s???n xu???t: </LaybalStyle>
                                            <Input placeholder='Nh???p h??ng s???n xu???t' onChange={onChangeText} id='company_name' style={{ width: '70%', flex: 'right', borderRadius: '5px' }}></Input>
                                        </BoxInput>
                                        <BoxInput>
                                            <LaybalStyle>Thu??? VAT %: </LaybalStyle>
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
                                    <p>Lo???i ????n v???</p>
                                    <p>????n v???</p>
                                    <p>Gi?? tr??? quy ?????i</p>
                                    <p>Gi?? b??n l???</p>
                                    <p>C???nh b??o t???n kho</p>
                                </BoxUnit>
                                <BoxListUnit>
                                    {
                                        listDv.length === 0 ? (
                                            <BoxEmpty>
                                                Tr???ng
                                            </BoxEmpty>) : showList
                                    }
                                </BoxListUnit>
                            </div>
                            <div className="m-2">
                                <div>
                                    <InputAddUnit onClick={handleAddDV} type="button" value='Th??m ????n v???'></InputAddUnit>
                                </div>
                            </div>
                            <hr></hr>
                            <BoxButonUnit >
                                <div onClick={handleClose}>
                                    <InputCancelUnit type="button" value='H???y b???'></InputCancelUnit>
                                </div>
                                <div onClick={handleYes}>
                                    <InputYeslUnit type="button" value='?????ng ??'></InputYeslUnit>
                                </div>
                            </BoxButonUnit>
                        </BoxModalPopup>
                    </BoxModal>
                </div>
            </div>
            <table style={{ margin: '5px auto' }}>
                <tr style={{ fontWeight: 'bold' }}>
                    <td style={{ width: '30px' }}>ID</td>
                    <td style={{ width: '200px' }}>Name</td>
                    <td style={{ width: '200px' }}>Price</td>
                    <td style={{ width: '200px' }}>Init</td>
                    <td style={{ width: '100px' }}>Image</td>
                    <td style={{ width: '100px' }}>Update</td>
                    <td style={{ width: '100px' }}>Delete</td>
                </tr>
            </table>
            {listSanPham ? showListSanPham : ""}


        </div>
    )
}
