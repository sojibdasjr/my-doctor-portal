import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { serviceInfo } from '../../data/data';

const OurService = () => {
    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{fontWeight:600, mt:5, textAlign:'center', color:'#1CC7C1'}} >Our Services</Typography>
                <Typography variant='h3' textAlign='center'  fontWeight='500' marginBottom='15px'>
                <Typewriter
                            options={{
                                strings: ['Services We Provide'],
                                autoStart: true,
                                loop: true,
                            }}
                            /></Typography>
            <Grid container spacing={3} >
                {
                    serviceInfo.map(({image, id, discription, title})=> <Grid key={id} item textAlign="center" xs={12} sm={12} md={4} lg={4}>
                        <img src={image} alt="" />
                        <Typography variant='h5' fontWeight='600'>{title}</Typography>
                        <Typography variant='subtitle1' my='15px' sx={{color:'gray'}} >{discription}</Typography>
                    </Grid>)
                }
            </Grid>
            </Container>
            
        </div>
    );
};

export default OurService;