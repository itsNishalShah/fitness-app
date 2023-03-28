import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import Logo2 from '../assets/icons/instagram.png';
import Logo3 from '../assets/icons/facebook.png';

const Footer = () => (
    <Box mt="21px" bgcolor="#ffdb7f" width={"1700px"}>
     <Stack>
     <img src={Logo} alt="logo" style={{ marginLeft:'30px', marginTop:'46px', width: '80px', height: '41px' }} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}>
          <a href="https://example.com" style={{  marginLeft:'10px', textDecorationLine: 'underline', color: 'black' }}>Reminder</a>
          <a href="https://example.com" style={{  marginLeft:'10px', textDecorationLine: 'underline', color: 'black' }}>DietCharts</a>
          <a href="https://example.com" style={{  marginLeft:'10px', textDecorationLine: 'underline', color: 'black' }}>Local Groups</a>
          <a href="https://example.com" style={{  marginLeft:'10px', textDecorationLine: 'underline', color: 'black' }}>Trainer</a>
          <a href="https://example.com" style={{  marginLeft:'10px', textDecorationLine: 'underline', color: 'black' }}>Feedback</a>
        </div>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="10px" marginLeft={'20px'} pb="40px">Fitness Freaks</Typography>
     </Stack>
     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right',textAlign: 'center' , marginTop:'0px' , marginRight:'35px'}}>
          <a href="https://www.instagram.com/your_instagram_handle/">
          <img src={Logo3} alt="Facebook" width="20px" height="20px" />
          Facebook
          </a>
          <a href="https://www.facebook.com/your_facebook_page/">
            <img src={Logo2} alt="Instagram" width="20px" height="20px" />
            Instagram
          </a>
        </div>
    </Box>
  );

export default Footer;
