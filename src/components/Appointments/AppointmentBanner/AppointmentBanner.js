import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chairImg from '../../../images/chair.png'
import Calendar from './Calendar';
import './AppointmentBanner.css'

const AppointmentBanner = ({date, setDate}) => {

    const style ={
        display:'flex',
        alignItems:'center',
        minHight:500,
        height:'90vh'
    }
    
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography id="appointment" variant='h3'>Appointment</Typography>
                        <Calendar date={date} setDate={setDate} />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={chairImg} alt="" width="100%"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentBanner;