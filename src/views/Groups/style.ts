import styled from "styled-components";
import background from '../../assets/img/movies-bg.png';

export const Container = styled.div`
padding: 0px 20px;
flex: 1.5
display: flex;
height: 100%;
flex-direction: column;
`;

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

export const MoviesCounter = styled.span<{ length: number }>`
 font-size: 1rem;
 text-align: center;

 b {
     color: ${props => props.length > 8 ? "red" : "#0174d9"};
 }
`;