import React, {useState} from 'react';
import {Box, Button, Grid} from '@material-ui/core';
import testimonialPic from '../../assests/Testimonial image 1.png';
import blackBeauties from '../../assests/black-beautiful-ladies-smiling 1.png';
import shopping from '../../assests/woman-shoppingbag-card 1.png';
import strike from '../../assests/Vector 3.png';
import './style.scss';
import Modal from '../../Components/Modal';

const WebPage = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(!open);
  };
  const [story, setStory] = useState([]);
  React.useEffect(() => {
    console.log(story);
  }, [story.length]);
  const stories = story.map((item) => {
    console.log(item);
    return (
      <Grid item md={3} xs={12}>
        <Box padding="1rem 1rem">
          <img src={item.image} alt="" className="circle-img" />
          <h6>
            {item.firstName} {item.lastName}
          </h6>
          <Box display="inline-flex" width="75%" alignItems="center">
            <p>{item.location}</p>
            <span
              style={
                item.service === 'customer'
                  ? {backgroundColor: '#EEF8FF'}
                  : {backgroundColor: 'F0FFEE'}
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
      <Grid container style={{height: '38rem'}}>
        <Grid item md xs={12}>
          <Box paddingLeft="11rem">
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
        <Grid item md sm>
          <Box pb="1rem" display="inline-flex">
            <img
              src={testimonialPic}
              alt=""
              style={{zIndex: 3, position: 'relative'}}
              className="testi-img"
            />
            <div className="circle" style={{top: '6rem', zIndex: -1}}></div>
          </Box>
        </Grid>
      </Grid>

      {/* second layer */}
      <Grid
        container
        style={{backgroundColor: 'black'}}
        className="second-layer"
      >
        <Grid item md sm>
          <Box
            pb="1rem"
            display="inline-flex"
            width="100%"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            paddingBottom="1rem"
          >
            <img
              src={blackBeauties}
              alt=""
              style={{zIndex: 3, position: 'relative'}}
              className="testi-img"
            />
            <div className="circle"></div>
          </Box>
        </Grid>
        <Grid item md sm>
          <Box paddingLeft="11rem">
            <h5>Tolu & Joy’s Experience</h5>
            <span>
              <p className="customer">CUSTOMER</p>
            </span>
            <Box width="75%">
              <p>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <p style={{marginBottom: 0}} onClick={onClose}>
                SHARE YOUR OWN STORY
              </p>
              <img onCli src={strike} alt="" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* third layer */}
      <Grid container className="third-layer">
        <Grid item md={3} xs={12}>
          <Box padding="1rem 2rem">
            <img src={blackBeauties} alt="" className="circle-img" />
            <h6>Joseph Ike</h6>
            <Box display="inline-flex" width="75%" alignItems="center">
              <p>In Ikeja</p>
              <span>customer</span>
            </Box>
            <div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </div>
          </Box>
        </Grid>
        {stories}
      </Grid>
      {/* Fourth layer */}
      <Grid container className="fourth-layer">
        <Grid item md xs={12}>
          <Box padding="1rem 7rem">
            <h6>Josiah's Experience</h6>
            <span>VENDOR</span>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <p style={{marginBottom: 0}}>SHARE YOUR OWN STORY</p>
            <img src={strike} alt="" />
          </Box>
        </Grid>
        <Grid item md xs={12}>
          <img src={shopping} alt="" />
          <div className="circle-fourth"></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebPage;
