import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: space-around;
flex-direction: row;
align-items: center;
gap: 10px;
`

const List = styled.ul`
justify-content: center;
align-items: center;
list-style-type: none;
/* border: 1px solid black; */
`
const ListItem = styled.li`
margin:20px;`

const Button = styled.button`
padding: 10px 20px;
border-radius: 30px;
font-family: "Poppins", sans-serif;
background-color: white;
font-weight: 600;
margin: 10px;

&:hover{
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
/* &:focus{
    background-color: black;
    color: white;
} */
`

const Logo = styled.div`
/* border: 1px solid black; */
padding: 10px;
display: flex;
align-items: center;`
const Img = styled.img`
width: max-content;
height: max-content;
&:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
}`

const NavBar = () => {
    return (
        <Container>
        <Logo>
            <Img src='../../CysHUB.png' alt="logo" />
        </Logo>
            <List>
                <ListItem>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button>Dashboard</Button>
                    </Link>
                    <Link to="/editprofile">
                        <Button>Profile</Button>
                    </Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default NavBar