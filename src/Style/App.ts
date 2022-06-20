import styled from "styled-components";

export const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 2px solid black;
    text-align: center;
    align-items: center;
    position: relative
`;
export const BoxSlider = styled.div`
    width: 20%;
    border: 2px solid black;
`;
export const BoxBody = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
export const BoxRouter = styled.div`
    margin-top: 35px;
    width: 100%;
    height: 100%;
    background-image: url(data:image/jpeg;base64,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);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 20px;
`;