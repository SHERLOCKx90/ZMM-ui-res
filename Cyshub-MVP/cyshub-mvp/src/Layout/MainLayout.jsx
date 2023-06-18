import React, { Children } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Poppins', sans-serif;
  margin:0;
}`

const Container = styled.div``
// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Container>{children}</Container>
    </div>
  )
}

export default MainLayout