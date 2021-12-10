import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import small_Doctor from '../../../images/doctor-small.png'


const OurDoctor = () => {
    
    return (
        <Container sx={{marginY:5}}>
            <div style={{textAlign:'center'}}>
            <Typography variant ='h6'  color='#1CC7C1'>OUR BLOG</Typography>
            <Typography variant ='h4' fontWeight='500'>From Our Blog News</Typography>
            </div>
            <Grid container spacing={2}>
            <Grid  marginY='1rem' item xs={12} sm={12} md={4} lg={4}>
            <Paper variant='outlined'>
            <img src={small_Doctor} alt=""  width='100%'/>
            <div style={{textAlign:'center'}}>
            <Typography variant='h6'>Dr. Caudi</Typography>
            <Typography color='#1CC7C1' variant='subtitle2'> <FontAwesomeIcon icon={faPhoneAlt} /> +88 5684 5486</Typography>
            </div>
            </Paper>
            </Grid>
            <Grid marginY='1rem' item xs={12} sm={12} md={4} lg={4}>
            <Paper variant='outlined'>
            <img src={small_Doctor} alt=""  width='100%'/>
            <div style={{textAlign:'center'}}>
            <Typography variant='h6'>Dr. Caudi</Typography>
            <Typography color='#1CC7C1' variant='subtitle2'> <FontAwesomeIcon icon={faPhoneAlt} /> +88 5684 5486</Typography>
            </div>
            </Paper>
            </Grid>
            <Grid marginY='1rem' item xs={12} sm={12} md={4} lg={4}>
            <Paper variant='outlined'>
            <img src={small_Doctor} alt=""  width='100%'/>
            <div style={{textAlign:'center'}}>
            <Typography variant='h6'>Dr. Caudi</Typography>
            <Typography color='#1CC7C1' variant='subtitle2'> <FontAwesomeIcon icon={faPhoneAlt} /> +88 5684 5486</Typography>
            </div>
            </Paper>
            </Grid>
            </Grid>
            
        </Container>
    );
};

export default OurDoctor;