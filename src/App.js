import {Grid} from '@material-ui/core';
import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import WebPage from './Page/WebPage';

const App = () => {
  return (
    <>
      <Navbar />
      <WebPage />
      <Footer />
    </>
  );
};

export default App;
