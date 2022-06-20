import styled from "styled-components";

export const BoxShowList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px
`;
export const BoxModalPopup = styled.div`
    background-color: #fefefe;
    margin: auto;
    border: 1px solid #888;
    width: 80%;
`;
export const BoxModal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;
export const BoxTitle = styled.div`
    padding-left: 10px;
    font-weight: bold;
    background-color: #73c04e;
    height: 40px;
    line-height: 40px;
    margin: 0px;
    color: white
`;
export const BoxUploadImage = styled.div`
    width: 78px;
    height: 78px;
    line-height: 38px;
    text-align: center;
    align-items: center;
    background-color: #f8f8f8;
    margin: 10px;
`;
export const BoxImage = styled.div`
   border: 1px dotted black;
   border-radius: 10px;
`;
export const BoxInfor = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    margin-top: 10px;
`;
export const TextInforBase = styled.p`
    background-color: #73c04e;
    padding: 5px;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    color: white;
`;
export const TextInforAdvanced = styled.p`
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    borderradius: 5px 5px 0px 0px;
    padding: 5px;
`;
export const BoxInputInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin: -15px 0px;
    border: 1px solid #f2f2f2;
    padding: 15px;
`;
export const BoxInputInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left
`;
export const BoxInput = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
`;
export const LaybalStyle = styled.label`
    width: 30%;
    flex: left;
    font-weight: bold;
`;
export const BoxInputInforRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left
`;
export const BoxUnit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    margin: 5px;
    background-color: #73c04e;
    color: white;
    border-radius: 5px 5px 0px 0px;
`;
export const BoxListUnit = styled.div`
    border: 1px solid #f8f8f8
    margin: -5px 5px;
    text-align: center;
`;
export const BoxEmpty = styled.div`
    height: 200px;
    line-height: 200px;
    text-align: center;
`;
export const InputAddUnit = styled.input`
    background-color: #1890ff;
    border: none ;
    background-color: rgb(24,144,255);
    padding: 7px 15px;
    border-radius : 5px;
    font-weight: bold;
    color: white; 
`;
export const BoxButonUnit = styled.div`
    text-align: right;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
export const InputCancelUnit = styled.input`
    margin-right: 5px;
    border: 1px solid #f2f2f2;
    background-color: #f8f8f8;
    border-radius : 5px;
    font-weight: bold;
    color: black; 
    padding: 7px 15px 
`;
export const InputYeslUnit = styled.input`
    background-Color: #1890ff;
    border: none;
    border-radius : 5px;
    font-weight: bold;
    color: white; 
    padding: 7px 15px;
`;

