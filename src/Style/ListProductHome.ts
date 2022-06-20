import styled from "styled-components";

export const ButtonAddCart = styled.button`
    background-color: red;
    padding: 5px 10px;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold
`;
export const BoxProduct = styled.div`
    width: 300px;
    margin: 20px 20px;
    height: 420px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    align-items: center;
    &:hover{
        cursor: pointer;
        box-shadow: -5px 5px 10px rgb(209, 209, 209);
        transition: all 0.3s ;
    }
`;
export const BoxListPro = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center ;
    align-items: center;
`;
export const ImageProduct = styled.image`
    width: 290px;
    height: 250px;
    margin-top: 10px;
    border-radius: 5px;
    alt: '';
    src:""
`;