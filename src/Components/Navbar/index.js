import React from 'react';
import {Box, Grid} from '@material-ui/core';
import Logo from '../../assests/clipart869091.png';
import {Button} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import './style.scss';

const Navbar = () => {
  return (
    <Grid container id="navbar">
      <Grid item md xs={12} className="xs-logo">
        <Hidden only="xs">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <div className="logo-container">
              <img src={Logo} alt="" />
              <h3>SureWear</h3>
            </div>
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
        </Hidden>
        <Hidden smUp>
          <div className="logo-container">
            <img src={Logo} alt="" />
            <h3>SureWear</h3>
          </div>
        </Hidden>
      </Grid>
      <Hidden only="xs">
        <Grid container>
          <Grid item md sm>
            <Box
              display="flex"
              padding="0.5rem"
              justifyContent="space-evenly"
              className="btm-div"
            >
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
      </Hidden>
    </Grid>
  );
};

export default Navbar;
