import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
position: relative;
z-index: 1000;
`

const Container = styled.div`
width: 100wh;
height: max-content;
/* border: 1px solid red; */
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
height: 550px;
padding: 20px;
`
const ImgCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
padding: 10px;
position: absolute;
`

const Img = styled.img`
border: 2px solid black;
border-radius: 30px;
`

const Header = styled.h1`
text-align: center;
font-size: 3rem;
font-family: 'Poppins', sans-serif;
font-weight: 800;`

const TagLine = styled.p`
text-align:center;
font-size: 1.2rem;`

const Button = styled.button`
padding: 10px 20px;
border-radius: 30px;
font-family: "Poppins", sans-serif;
background-color: black;
font-weight: 600;
margin: 10px;
color: white;

&:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
`
const ButCon = styled.div`
display:flex;
justify-content: center;`


const Hero = () => {
  return (
    <Container>
      <Content>
        <Header>Start Collaborating .<br />
          Start Converting your Ideas into Reality.</Header>
        <TagLine>Explore latest projects and access your progress in CYSCOM</TagLine>
        <ButCon><Button>Explore All</Button></ButCon>
      </Content>
      <ImgCon>
        <Img src="../../banner.png" alt="Hero Image" />
      </ImgCon>
    </Container>
  )
}

export default Hero