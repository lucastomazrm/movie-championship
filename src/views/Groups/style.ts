import styled from "styled-components";
import background from '../../assets/img/movies-bg.png';

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
