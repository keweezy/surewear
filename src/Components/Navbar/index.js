import React from 'react';
import {Box, Grid} from '@material-ui/core';
import Logo from '../../assests/Vasiti-Logo-black 1.png';
import {Button} from '@material-ui/core';
import './style.scss';

const Navbar = () => {
  return (
    <Grid container id="navbar">
      <Grid item md xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          padding="0.5rem 7rem"
          alignItems="center"
        >
          <img src={Logo} alt="" />
          <Box display="flex">
            <Box mr="1rem">
              <p>ABOUT US </p>
            </Box>
            <Box mr="1rem">
              <p>STORIES</p>
            </Box>
            <Box mr="1rem">
              <p>CONTACT</p>
            </Box>
            <Box mr="1rem">
              <p>LOGIN</p>
            </Box>
            <Button variant="contained" size="small" className="button">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid container>
        <Grid item md sm>
          <Box display="flex" padding="0.5rem 11rem" justifyContent="space-evenly" className="btm-div">
            <Box>
              <p>MARKETPLACE</p>
            </Box>
            <Box>
              <p>WHOLESALE CENTER</p>
            </Box>
            <Box>
              <p>SELLER CENTER</p>
            </Box>
            <Box>
              <p>SERVICES</p>
            </Box>
            <Box>
              <p>INTERNSHIPS</p>
            </Box>
            <Box>
              <p>EVENTS</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
