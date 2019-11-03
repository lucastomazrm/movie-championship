import styled, { } from "styled-components";

export const GroupStyle = styled.div`
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1);
    background-color: #fff;
    border-top: 4px solid #ff9817;
    margin: 15px 5px 15px 0;
    width: auto;
    height: auto;
    user-select: none;
    padding: 10px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    h3{
        color: #333;
        font-weight: 300;
    }
    span {
        text-align: center;
    }
`;


export const CardContent = styled.div`
padding: 20px;
`;