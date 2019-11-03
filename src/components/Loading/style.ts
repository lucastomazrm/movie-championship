import styled from "styled-components";

export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    img {
        max-width: 30px;
        margin-bottom: 10px;
    }
`;