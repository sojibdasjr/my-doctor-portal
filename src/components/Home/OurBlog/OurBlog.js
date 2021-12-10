import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { ourBlog } from '../../data/data';
import './OurBlog.css'

const OurBlog = () => {
    return (
        <Container sx={{marginTop:'3%'}}>
            <Typography variant ='h5' color="#1CC7C1" textAlign='center'>OUR BLOG</Typography>
            <Typography variant ='h3' textAlign='center' fontWeight='500' margin='1rem'>From Our Blog News</Typography>

        <div>
        <Grid container spacing={2}>
            {
                ourBlog.map(({_id, img, name, date, title, discription})=> <Grid key={_id} item xs={12} sm={12} md={4} lg={4}>
                    <Paper className="paper-card" variant='elevation' sx={{padding:'1.5rem 0'}}>
                        <Grid sx={{display:'flex', paddingLeft:'2rem', alignItems:'center'}}>
                            <img src={img} alt="" width='19%' />
                            <div style={{paddingLeft:'15px'}}>
                                <Typography variant='h6'>{name}</Typography>
                                <Typography variant='subtitle1'>{date}</Typography>
                            </div>
                        </Grid>
                        <Grid  container sx={{ paddingLeft:'2rem', marginTop:'1rem'}}>
                        <Typography className='title_text' variant='h7' fontWeight="500" padding='0 5px'>{title}</Typography>
                        <Typography variant='subtitle2' sx={{marginTop:'1rem', color:'GrayText'}} >{discription}</Typography>
                        </Grid>
                    </Paper>
                </Grid>)
            }
        </Grid>
        </div>

        </Container>
    );
};

export default OurBlog;