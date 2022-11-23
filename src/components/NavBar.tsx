import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';


export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/logo512.png" alt="logo" style={{marginRight: '10px'}} />
                    React with Redux Sample Project
                </Menu.Item>
                <Menu.Item name='Home' as={NavLink} to='/' />
                <Menu.Item>
                    <Button as={NavLink} to='/post' positive content='Posts' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}