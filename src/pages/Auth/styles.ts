import styled from 'styled-components'
import { TextField } from '@mui/material';

export const Wrapper = styled.div`
background-color: #bbc5ce;
min-height: 400px;
width: 600px;
border-radius: 20px;
padding:20px
`;


export const Logo = styled.div`
background-color: white;
border: 2px black solid;
height:80px;
width:80px;
border-radius: 50%;
margin: 0 auto;
position: relative;
bottom: 60px
`;

export const Title = styled.h1`
     color: white;
     text-align:center;
     margin-bottom: 30px;
`;

export const Form = styled.form`
display:flex;
align-items: center;
flex-direction: column`
;

export const Input = styled(TextField)`
width: 70%;
bottom: 20px

`;

export const Button = styled.button`
 background-color: #39a2cf;
 color:white;
 border: none;
 border-radius: 20px;
 padding: .5rem 1rem;

 
`;
