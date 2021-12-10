import { Container, Grid, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png'
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';

const YourTerms = () => {
    return (
        <Container sx={{marginTop:'8rem'}}>
            <Grid container spacing={2} sx={{alignItems:'center'}}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img src={treatment} alt="" width='100%' />
                </Grid>
                    
                <Grid  item xs={12} sm={12} md={6} lg={6}>
                <Typography variant='h3' fontWeight='500' my='1.2rem'>
                        Exceptional Dental <br /> Care, on Your Terms 
                    </Typography>
                    <Typography variant='subtitle1' color='gray' my='2rem' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quasi enim alias ullam commodi voluptatem, ipsa fugit provident, dolores tempora vitae consequuntur repellat quibusdam sapiente iusto voluptates incidunt, mollitia reiciendis.
                    </Typography>
                    <MuiButton style={{marginBottom:'2rem'}}>Leran More</MuiButton>
                </Grid>
            </Grid>
        </Container>
    );
};

export default YourTerms;