import React from 'react'
import MainLayout from '../Layout/MainLayout'
import styled from 'styled-components'
import Card from '../components/Card'
import Data from '../Assets/Data'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 1444px;
height: max-content;
/* border: 1px solid red; */
/* overflow: hidden; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
position: relative;
/* height: 581px; */
padding: 20px;
/* padding: 10px; */
`

const Heading = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
/* border: 1px solid black; */
width: 100%;
font-size: 1.5rem;
font-weight: 600;
font-family: 'Poppins', sans-serif;
/* padding: 10px 50px; */
text-decoration-line: none;
`

const Slider = styled.div`
/* border: 1px solid black; */
margin: 20px 0px;
display: grid;
row-gap: 30px;
grid-template-columns: repeat(4, 1fr);
`

const Caro = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* border: 1px solid green; */
width: 100%;`

const Section = styled.div`
width: 100wh;
height: max-content;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;`

const Linker = styled(Link)`
text-decoration-line: none;
color: black;
font-family: 'Poppins', sans-serif;
font-size: 1.5rem;
font-weight: 700;`

const FeaturedPage = () => {
    return (
        <MainLayout>
            <Section>
                <Container>
                    <Heading><Linker to="/featuredpage">Featured Projects</Linker></Heading>

                    <Caro>
                        <Slider>
                            <Card details={Data} />
                        </Slider>
                    </Caro>

                </Container>
            </Section>

        </MainLayout>
    )
}

export default FeaturedPage