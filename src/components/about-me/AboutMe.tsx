import { Button, Grid, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

export default function AboutMe () {
  return (
    <div className='about-me-container'>
      <Typography variant="h2" component="h2">
        About Me
      </Typography>
      <Typography variant="h6" component="h6">
        Experienced full-stack developer with 5 years of expertise, specializing in React and Python. 
        Proficient in building robust web applications, leveraging the power of React on the front end and Python on the back end.
        Skilled in designing scalable and efficient solutions, with a strong emphasis on clean code practices and maintainable 
        architecture.
      </Typography>
      <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            item
            xs={6}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%'
            }}
          >
            <a
              href='https://www.linkedin.com/in/amagon0796/'
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center' 
            }}
          >
            <a
              href='https://github.com/Amagon96'
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Grid>
        </Grid>
    </div>
  )
}