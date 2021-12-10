import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';

const Contact = () => {
    return (
        <div>
           <div style={{backgroundColor:"#3A4256"}}>
               <Container  maxWidth='md'>
                <div style={{textAlign:'center'}}>
                <Typography variant='h6' color="#1CC7C1">CONTACT US</Typography>
                <Typography variant='h3' margin='1.2rem' color="#fff">Always Connect with us</Typography>
                </div>
                <TextField required fullWidth sx={{backgroundColor:'#fff', borderRadius:1}} id="filled-basic" label="Email" variant="filled" />
                <TextField required fullWidth margin='normal' sx={{backgroundColor:'#fff', borderRadius:1}} id="filled-basic" label="Subject" variant="filled" />
                <textarea rows={10} placeholder="Your Messages" style={{border:0, outline:0, width:'100%', borderRadius:3}}></textarea> <br />
               <MuiButton sx={{marginY:5}}>Submit</MuiButton>
               </Container>
           </div>
        </div>
    );
};

export default Contact;