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

import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
//import TeamSection from "./Sections/TeamSection.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
//import Horizontal from "views/Components/Sections/Horizontal.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CausePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Logo"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/Images/cause.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Our Causes</h1>
              <h3>
              The greatest use of Life is to spend it on something that will outlast it.
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <div className="indigo darken-3 wrapper section">
      <div className="container">
        <div className="row">
          <div className="col  s12 l12">
            <h4
              style={{ fontSize: 30, fontWeight: 600 }}
              className="white-text "
            >
              47.1% of children of Unprivileged community are unsanitized
            </h4>
            <hr className="red" />
          </div>
          
        </div>
      </div>
    </div>
          <SectionCarousel />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Footer />
      </div>
    </div>
  );
}
