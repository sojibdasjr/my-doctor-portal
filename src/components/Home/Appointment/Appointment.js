import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import doctor from '../../../images/doctor.png';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import bg from '../../../images/bg.png'
import './Appointment.css'


const Appointment = () => {
    const useStyle = makeStyles ({
        root:{
            
            background:`url(${bg})`,
            backgroundColor:'#3A4256',
            height:350,
            display:'flex',
            alignItems:'center',
            marginTop:'10%',

            
        }
    })

    const {root} = useStyle()

    return (
        <div className={root}>
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={5} lg={5} sx={{marginTop:'-10%'}}>
                        <img className='appointment_img' src={doctor} alt="" width="100%" />
                    </Grid>

                    <Grid item xs={12} sm={12} md={5} lg={7} >
                        <Typography variant='h6' color='#1CC7C1' >Appointment</Typography>
                        <Typography variant='h4' sx={{color:'#fff', my:1}}>Make an Appointment</Typography>
                        <Typography variant='body1' sx={{color:'#fff', my:3}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam laudantium laboriosam quia impedit odit.</Typography>
                        <MuiButton>Learn More</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Appointment;