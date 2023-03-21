import styled from 'styled-components'

export const Nav = styled.nav`
width: 90%;
background-color: #bbc5ce;
margin: 0 auto;
height: 80px;
border-radius: 20px;
box-shadow: 0 8px 40px -12px rgba(0,0,0,0.3);
&:hover {
  box-shadow: 0 16px 70px -12.125px rgba(0,0,0,0.3);}


`;

export const UnList = styled.ul`
display:flex;
list-style:none;
justify-content: space-around;
align-items:center;
height:100%


`;

export const Link = styled.a`
text-decoration:none;
color:white;

  &:hover {
    color: red;
  }
`;

