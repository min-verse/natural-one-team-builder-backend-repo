import React, { useState, FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../state/user';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

interface RegisterProps {
    handleClick: () => void;
}

interface RegisterObj {
    email: string;
    username: string;
    password: string;
}

const RegisterBox: FC<RegisterProps> = ({ handleClick }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            email: { value: string };
            username: { value: string };
            password: { value: string };
        };

        const newRegister: RegisterObj = {
            email: target.email.value,
            username: target.username.value,
            password: target.password.value
        }

        console.log(newRegister);

        fetch("http://localhost:2218/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(newRegister)
        }).then(res => res.json())
            .then((objRes) => {

            });

    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: '#92972A' }}>
                <CasinoSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Welcome to Natural One
            </Typography>
            <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirmPassword"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register for Natural One
                </Button>
                <Grid container>
                    <Grid item>
                        <Link onClick={handleClick} href="#" variant="body2">
                            {"Already with us? Log in to see your parties."}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default RegisterBox;