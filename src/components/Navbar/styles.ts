import styled from 'styled-components'

export const Nav = styled.nav`
width: 90%;
background-color: #bbc5ce;
margin: 0 auto;
height: 80px;
border-radius: 20px

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

