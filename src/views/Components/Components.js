import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/components.js";

//sections
//import About from "./Sections/About";
import Cause from "./Sections/Cause";
import Horizontal from "./Sections/Horizontal.js";
//import TestimonialCard from "./Sections/TestimonialCard";
import Testimonial from "./Sections/Testimonial.js";
import Xyz from "./Sections/Xyz.js";
import Blogs from "./Sections/Blogs.js";

///import Logo from "../../assets/Images/logo.png";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/Images/home.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>They Suffer We Change You Make it. </h1>
                <h3 className={classes.subtitle}>
                Your Every Single Donation Is Great Help to Humanity.
                </h3>
                <button className="btn btn-large red hide-on-large-only">
                <a className="white-text" href="http://donate.lifebeginsindia.in/">
                Donate
              </a>
                </button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Horizontal />
        <Xyz />
      </div>
      <Cause />
      
      <div className="indigo darken-3 wrapper section">
      <div className="container">
        <div className="row">
          <div className="col  s12 l12">
            <h4
              style={{ fontSize: 30, fontWeight: 600 }}
              className="white-text "
            >
              54.4% of children of Unprivileged community are unhealthy
            </h4>
            <hr className="red" />
          </div>
        </div>
      </div>
    </div>

      <Testimonial />
      <SectionCarousel />
      <Blogs />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Footer styles={{ marginTop: 30 }} />
      </div>
    </div>
  );
}
