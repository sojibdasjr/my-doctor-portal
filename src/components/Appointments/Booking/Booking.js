import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos'
import MuiButton from '../../../StyledComponent/MuiButton';
import { bookings } from '../../data/data';
import 'aos/dist/aos.css';
import Tilt from 'react-vanilla-tilt'
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const Booking = ({date}) => {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing:'ease'
        });
    });

    const sytle = {
        padding:3, 
        display:'flex', 
        justifyContent:'center'
    }
    return (
        <Container sx={{marginY:5}}>
            <Typography paddingY='3%' color="#1CC7C1" textAlign="center" fontWeight='500' variant='h4'>Availabel Appointemt on {new Date(date).toDateString()}</Typography>

           
            <Grid container spacing={3}>
                {
                    bookings.map(({id,name, time, space})=><Grid data-aos="zoom-out-up" key={id} item xs={12} sm={12} md={4} lg={4} >

                    <Tilt>
                        <div style={sytle}>
                            <div>
                            <Typography fontWeight='500' color="#1CC7C1" variant='h5'>{name}</Typography>
                        <Typography textAlign='center' variant='subtitle1'>{time}</Typography>
                        <Typography marginY='5px' textAlign='center' color="gray" variant='subtitle2'>{space} SPACES AVAILABLE</Typography>
                        <MuiButton onClick={handleOpen}>Book Appointment</MuiButton>
                        
                            </div>
                        </div> 
                    </Tilt> 
                    <AppointmentModal date={date} name={name} time={time} handleClose={handleClose} open={open} />
                    </Grid>)}
            </Grid>
            
        
        </Container>
    );
};

export default Booking;