import styled from "styled-components";

export const ProgressContainer = styled.div`
width: 100%;
position: fixed;
bottom: 10%;
left: 0;
display: flex;
    justify-content: center;
`;
export const IndexedStyle = styled.div<{ accomplished: string }>`
    color: white;
    width: 40px;
    height: 40px;
    font-size: 16px;
    background-color: ${props => props.accomplished ? "rgba(0, 116, 217, 1)" : "rgba(211, 211, 211, 0.8)"};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
