import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import chairImg from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import './Banner.css'

const Banner = () => {

    const style = {
        minHeight:500, 
        height:'100vh', 
        display:'flex', 
        alignItems:'center',
        background:`url(${bg})`
    }

    return (
        <div className="side-background" style={style}>
            <Container>
                <Grid container spacing={2} sx={{alignItems:'center'}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant ='h2' sx={{fontWeight:600, letterSpacing:1}}>
                            Your New Smile <br /> Start Here
                        </Typography>

                        <Typography variant='body1' sx={{lineHeight:1.5, my: 3}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ipsa neque expedita qui ipsam quos dolorum illo iste, eveniet amet.
                        </Typography>

                        <MuiButton>GET APPOINTMENT</MuiButton>

                    </Grid>

                     <Grid item xs={12} sm={12} md={6} lg={6}>
                       <img src={chairImg} alt="" width='100%' />
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;