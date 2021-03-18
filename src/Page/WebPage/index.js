import React, {useState, useRef} from 'react';
import {Box, Grid} from '@material-ui/core';
import testimonialPic from '../../assests/Testimonial image 1.png';
import blackBeauties from '../../assests/black-beautiful-ladies-smiling 1.png';
import customer from '../../assests/Ellipse 24.png';
import shopping from '../../assests/woman-shoppingbag-card 1.png';
import strike from '../../assests/Vector 3.png';
import './style.scss';
import Modal from '../../Components/Modal';
import Hidden from '@material-ui/core/Hidden';

const WebPage = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(!open);
  };
  const [story, setStory] = useState([]);
  const select = useRef();
  React.useEffect(() => {}, [story.length]);
  let colors = [
    'red',
    'blue',
    'pink',
    'yellow',
    'ash',
    'purple',
    'cyan',
    'green',
  ];
  let currentColor = 0;

  React.useEffect(() => {
    setInterval(() => {
      select.current.style.color = colors[currentColor++ % colors.length];
    }, 1000);
  }, []);
  const stories = story.map((item) => {
    return (
      <Grid item md={3} xs={12}>
        <Box className="stories">
          <img
            src={item.image}
            alt=""
            className="circle-img"
            style={{maxWidth: '12rem'}}
          />
          <h6>
            {item.firstName} {item.lastName}
          </h6>
          <Box
            display="inline-flex"
            width="75%"
            alignItems="center"
            marginLeft="1rem"
          >
            <p>In {item.location}</p>
            <span
              style={
                item.service === 'customer'
                  ? {backgroundColor: '#EEF8FF'}
                  : {backgroundColor: '#F0FFEE'}
              }
            >
              {item.service}
            </span>
          </Box>
          <div>
            <p>{item.story}</p>
          </div>
        </Box>
      </Grid>
    );
  });
  return (
    <Grid container id="webpage">
      {open && <Modal onClose={onClose} story={story} setStory={setStory} />}
      <Grid container className="xs-flex">
        <Grid item md xs={12}>
          <Box paddingLeft="" className="pad">
            <h5>
              Amazing<br></br>
              Experiences from Our Wonderful Customers
            </h5>
            <Box width="75%">
              <p>
                Here is what customers and vendors are saying about us, you can
                share your stories with us too.
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item md sm xs={12}>
          <Box className="img-position">
            <img src={testimonialPic} alt="" className="testi-img" />
            <div className="circle1"></div>
          </Box>
        </Grid>
      </Grid>

      {/* second layer */}
      <Grid
        container
        style={{backgroundColor: 'black'}}
        className="second-layer"
      >
        <Grid item md xs={12}>
          <Box className="img-div">
            <img
              src={blackBeauties}
              alt=""
              style={{zIndex: 3, position: 'relative'}}
              className="testi-img"
            />
            <div className="circle"></div>
          </Box>
        </Grid>
        <Grid item md xs={12}>
          <Box paddingLeft="" className="pad width">
            <h5>Tolu & Joy’s Experience</h5>
            <span>
              <p className="customer">CUSTOMER</p>
            </span>
            <Box>
              <p>
                I had the best experience shopping with SureWear. Usability of
                the website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with SureWear. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back!
              </p>
              <p
                ref={select}
                style={{marginBottom: 0, cursor: 'pointer'}}
                onClick={onClose}
              >
                CLICK TO SHARE YOUR STORY
              </p>
              <img src={strike} alt="" className="strike" />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* third layer */}
      <Grid container className="third-layer">
        <Grid item md={3} xs={12}>
          <Box className="stories">
            <img src={customer} alt="" className="circle-img" />
            <h6>Joseph Ike</h6>
            <Box
              display="inline-flex"
              width="75%"
              alignItems="center"
              marginLeft="1rem"
            >
              <p>In Ikeja</p>
              <span>customer</span>
            </Box>
            <div>
              <p>
                After weeks of searching the internet and trying to navigate all
                the restrictions on purchases and returns for my daughter's
                First Communion dress, we made an appointment at SureWear
                Boutique. What a delightful experience. First impression ~ the
                variety and number of styles to chose from was amazing. Staff
                was so helpful guiding us through the choice and selecting
                several different styles that Chika liked. The staff was to quick to
                realize what Chika favored and brought in several dresses. What a
                joy for a father to see Chika say, "This is it! I'm saying
                yes!" Thank you for your expertise, your professionalism, your
                patience, and your personal attention. We highly recommend your
                beautiful boutique.
              </p>
            </div>
          </Box>
        </Grid>
        {stories}
      </Grid>

      {/* Fourth layer */}
      <Grid container className="fourth-layer">
        <Grid item md xs={12}>
          <Box className="pad2">
            <h6 style={{marginBottom:'1rem'}}>Bisola's Experience</h6>
            <span>VENDOR</span>
            <p>
              I had the best experience shopping with SureWear. Usability of
              the website was great, very good customer service, an all round
              great experience. I would definately be coming back! I had the
              best experience shopping with SureWear. Usability of the website
              was great, very good customer service, an all round great
              experience. I would definately be coming back!
            </p>
            <p style={{marginBottom: 0}}>SHARE YOUR OWN STORY</p>
            <img src={strike} alt="" className="strike" />
          </Box>
        </Grid>
        <Grid item md xs={12}>
          <img src={shopping} alt="" className="shopping" />
          <Hidden only="xs">
            <div className="circle-fourth"></div>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebPage;
