import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import coma from '../../../images/coma.png'
import { customarReview } from '../../data/data';

const Testimonial = () => {
    return (
        <Container>
            <Grid container spacing={5} sx={{alignItems:'center'}}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                <Typography variant='h5' sx={{color:'#1CC7C1'}} >TESTIMONIAL</Typography>
                <Typography variant='h2' fontWeight='400'>What's Our Patients <br /> Says</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                <img src={coma} alt="" width='80%' />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                {
                    customarReview.map(({_id, discription, img, name, title})=> <Grid key={_id} item xs={12} sm={12} md={4} lg={4}>

                    <Paper variant='elevation' sx={{padding:5}}>
                        <Typography variant='subtitle1'>{discription}</Typography>
                        <Grid sx={{display:'flex', alignItems:'center', justifyContent:'space-around', marginTop:3}}>
                            <img src={img} alt=""  width="18%" />
                            <div>
                                <Typography variant='h6' color="#1CC7C1">{name}</Typography>
                                <Typography variant='subtitle2'>{title}</Typography>
                            </div>
                        </Grid>
                    </Paper>

                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;