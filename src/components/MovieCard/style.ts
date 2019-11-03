import styled, { keyframes } from "styled-components";

export const CardStyle = styled.div<{ checked: boolean }>`
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,.05), 0 0 0 1px rgba(63,63,68,.1);
    background-color: #fff;
    border: 1px solid ${props => props.checked ? "#0174d9" : "transparent"}
    margin-bottom: 30px;
    width: 300px;
    height: auto;
    border: 1px solid ${props => props.checked ? "#0174d9" : "transparent"};
    transition: all 0.3s;
    position: relative;
    user-select: none;
`;

export const CheckedButton = styled.div<{ checked: boolean }>`
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #0174d9;
    color: white;
    display: ${props => props.checked ? "flex" : "none"}
    transition: all 1s;
`;

export const CardContent = styled.div`
padding: 20px;
`;