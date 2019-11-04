import styled from "styled-components";
import cup from "../../assets/img/cup.svg"

export const MoviesList = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
`;

export const IntroText = styled.h4`
text-align: center;
font-size: 2rem;
font-weight: 300;
margin-top: 20px;
padding: 20px 0;
display: flex;
flex-direction: column;
 span {
     margin-top: 20px;
     font-size: 1rem;
     font-weight: 300;
 }
`;

export const CupStyle = styled.div`
 background-image: url(${cup});
 width: 100px;
 margin: 15px 0;
 background-size: contain;
 background-position: center;
 background-repeat: no-repeat;
 
`;