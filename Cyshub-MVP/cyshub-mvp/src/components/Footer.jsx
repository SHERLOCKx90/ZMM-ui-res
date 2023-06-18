import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: black;
color: white;
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 2rem;
width: 100wh;
`

const Footer = () => {
  return (
    <Container>CYSCOM VIT Chennai @ 2023</Container>
  )
}

export default Footer