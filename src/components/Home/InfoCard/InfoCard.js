import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { infoData } from '../../data/data';


const InfoCard = () => {
    
    return (
        <Container>
            <Grid sx={{marginTop:'-8%'}} container spacing={3}>
                {
                    infoData.map(({Icon, id, title, description, background})=> <Grid key={id} item xs={12} sm={12} md={4} lg={4}>
                        <Paper variant='outlined' sx={{display:'flex', justifyContent:'space-around', background:background, color:'#fff', padding:3}}>
                            <Icon sx={{fontSize:60}}></Icon>
                            <div>
                                <Typography variant='body1'>{title}</Typography>
                                <Typography variant='subtitle1'>{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;