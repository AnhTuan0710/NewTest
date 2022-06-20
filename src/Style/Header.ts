import styled from "styled-components"; 

export const BoxLeft = styled.div`
    width: 70%;
    height: 50px;
    line-height:50px;
    text-align: left;
    color: red;
`;
export const BoxRight = styled.div`
    width: 30%;
    height: 50px;
    line-height: 50px;
    text-align: right;
    margin-right:20px;
    font-weight:bold;
    cursor: pointer
`;
export const BoxHeader = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    background-image: linear-gradient(to bottom right, #2da30f, #2da30f);
    color: yellow;
    position : fixed;
    margin-top: -5px;
    border:2px solid black;
    border-radius: 0px 0px 20px 20px;
`;