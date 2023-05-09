import React from 'react'
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomBreadcrumbs from '../Components/CustomBreadcrumbs';
import { Headline } from '../assets/data/customConstants';

function Navigation() {
  return (
    <div>
        <AppBar position="fixed">
            <Toolbar>
              <CameraIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap>
                {Headline}
              </Typography>
            </Toolbar>
        </AppBar>
        <CustomBreadcrumbs />
        <Outlet />
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Box>
        {/* End footer */}
    </div>
  )
}

export default Navigation