import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100vh;`;

export const Wrapper = styled.div`
background-color: #bbc5ce;
min-height: 400px;
min-width: 600px;
border-radius: 20px;
padding:20px;
box-shadow: 0 8px 40px -12px rgba(0,0,0,0.3);
&:hover {
  box-shadow: 0 16px 70px -12.125px rgba(0,0,0,0.3);}

`;
