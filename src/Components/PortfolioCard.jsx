import { useState, useContext } from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectContext } from '../context/ProjectContext';

function PortfolioCard({project}) {
    const {selectProject} = useContext(ProjectContext);

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={project.image}
                title={project.heading}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.heading} 
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {project.subHeading} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <RouterLink to={project.path}><Button size="small" onClick={()=>selectProject(project)} >Learn More</Button></RouterLink>
              </CardActions>
            </Card>


        </div>
    )
}

export default PortfolioCard