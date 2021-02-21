import React from 'react';
import {Grid} from '@material-ui/core';
import sub from '../../assests/subscribe-banner 1.png';
import icons from "../../assests/sm-icons.png"
import './style.scss';

const Footer = () => {
  return (
    <Grid container id="footer">
      <Grid container justify="center">
        <Grid className="flex-img" item md xs={12}>
          <img src={sub} alt="" className="mobile"/>
        </Grid>
        <Grid item md xs={12} className="center-flex">
          <div>
            <h4>
              Be a member <br></br> of our community 🎉
            </h4>
            <p className="p-width">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </p>
            <div className="sub-container">
              <p>enter your email address</p>
              <div className="subscribe">Subscribe</div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="bottom">
        <Grid container item md={4} xs={12}>
          <Grid item md xs>
            <h5>Company</h5>
            <p>About us</p>
            <p>Term of Use</p>
            <p>Privacy Policy</p>
            <p>Press & Media</p>
          </Grid>
          <Grid item md xs>
            <h5>Products</h5>
            <p>Magazine</p>
            <p>Marketplace</p>
            <p>Seller</p>
            <p>Wholesale</p>
            <p>Services</p>
          </Grid>
        </Grid>
        <Grid container item md={4} xs={12}>
          <Grid item md xs>
            <h5>Careers</h5>
            <p>Become a Campus Rep</p>
            <p>Become a Vasiti Influencer</p>
            <p>Become a Campus writer</p>
            <p>Become an Affiliate</p>
          </Grid>
          <Grid item md xs>
            <h5>Get in Touch</h5>
            <p>Contact us</p>
            <p>Partner with us</p>
            <p>Advertise with us</p>
            <p>Help/FAQs</p>
          </Grid>
        </Grid>
        <Grid container item md xs={12} className="center-flex community">
          <h5>Join Our Community</h5>
          <div>
            <img src={icons} alt="" />
          </div>
          <p>Email Newsletter</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
