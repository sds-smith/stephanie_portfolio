import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Name, AboutStephanie } from '../assets/data/customConstants';

function About() {
  return (
    <Paper sx={{pt: 8}}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {Name}
      </Typography>
      {
        Object.entries(AboutStephanie).map(section => {
          const [heading, body] = section;
          return heading === "Summary" 
            ? (
              <Box>
                <Typography>{heading}</Typography>
                <Typography >{body.Subheading}</Typography>
                <Typography >{body.Description}</Typography>
              </Box>
            ) : (
              <Box>
                <Typography>{heading}</Typography>
                <ul>
                  {
                    body.list.map(item => <li>{item}</li>)
                  }
                </ul>
              </Box>
            )})
      }
    </Paper>
  )
}

export default About