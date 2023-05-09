import PortfolioCard from "../Components/PortfolioCard";
import projects from "../assets/data/projects";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function CategoryPage({category}) {
  return (
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {category.name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects[`${category.name}`].map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <PortfolioCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}