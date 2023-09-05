import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const pages = ['Class', 'Dorm', 'Personal'];
    const navStyle = {
        color: 'black',
        backgroundColor: 'white',
        borderBottom: 'solid #dee2e6',
        boxShadow: 'none'
    };

    return (
        <AppBar style={navStyle} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 600,
                            letterSpacing: '.15rem',
                            color: '#48cae4',
                            textDecoration: 'none',
                        }}
                    >
                        CampusFinders
                    </Typography>
                    <Box
                        style={{
                            marginRight: '15px'
                        }}
                        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: 'inherit', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar src="" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar