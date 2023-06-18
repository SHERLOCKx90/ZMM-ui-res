/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 20px;
border: 1px solid black;
margin:20px;
border-radius: 20px;
background-color:#8572FF;
&:hover{
    cursor: pointer;
}`
const CardTitle = styled.h3``
const CardName = styled.h4`
color:white;`
const CardBody = styled.p`
color:#20194B;`
const Card = (props) => {
    return (
        <>
            {props.details.map((value, index) => (
                <Container key={index}>

                    <CardTitle>{value.title}</CardTitle>
                    <CardName>{value.name}</CardName>
                    <CardBody>{value.idea}</CardBody>
                </Container>
            ))}
        </>


    )
}

export default Card