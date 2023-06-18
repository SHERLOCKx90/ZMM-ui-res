import React from 'react'
import Home from './Pages/Home'
import MainLayout from './Layout/MainLayout'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`
const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Home />
      </MainLayout>
    </>


  )
}

export default App