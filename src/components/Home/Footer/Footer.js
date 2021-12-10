import { Container, Grid, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import footerbd from '../../../images/footer-bg.png'

const Footer = () => {

    return (
        <footer style={{backgroundImage:`url(${footerbd})`, backgroundPosition:'center', backgroundRepeat:'no-repeat'}}>
            <Container>
                <Grid container spacing={3} marginTop={3} marginBottom={10}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{mt:4}}>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                            <ListItemText>Teratement of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Exteraciotn</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{m1:4, color:'19D3AE'}} >Services</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                            <ListItemText>Teratement of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Exteraciotn</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{m1:4, color:'19D3AE'}} >Oral Healt</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                            <ListItemText>Teratement of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Exteraciotn</ListItemText>
                            <ListItemText>Check UP</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{m1:4, color:'19D3AE'}} >Our Adderess</ListItemText>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
                            
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Typography textAlign='center' variant='subtitle2'>Copyright © 2021 Doctor Portal</Typography>
        </footer>
    );
};

export default Footer;