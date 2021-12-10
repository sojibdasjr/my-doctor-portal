import {  Container, Grid,  TextField, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import loginImg from '../../../images/login.png'
import { Link } from 'react-router-dom';
import MuiButton from '../../../StyledComponent/MuiButton';


const Login = () => {
    return (
        <div>
            <Navigation/>
            <Container sx={{marginY:5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <form>
                            <Typography variant='h3' color="#1CC7C1" textAlign='center'>
                                Login
                        </Typography>
                        <TextField  fullWidth sx={{marginY:2}} label="Email" required variant="outlined" />
                        <br />
                        <TextField  fullWidth label="password" required variant="outlined" />
                        <Typography sx={{marginY:2}} variant='subtitle2'>Need an Account <Link to='/signIn'>Sign UP</Link> </Typography> 
                        <MuiButton fullWidth>LOGIN</MuiButton>
                        <Typography sx={{marginY:2, textAlign:"center"}} variant='subtitle1'>Or SignIn With</Typography>
                        <Typography>GOOGLE</Typography>
                        </form>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={loginImg} alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;