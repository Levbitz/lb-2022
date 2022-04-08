import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h2 className="center red-text">About Us</h2>

          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <h3 className="center indigo-text">Read About Us </h3>

              <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                <strong>Life Begins</strong> is a non profit organization founded and directed by young
                citizens who wants to see the positive changes in unprivileged communities with the 
                hand-built by Volunteers, Donars, Supporters and other well wishers to Grow their 
                way out of poverty. Our overall goal is the empowerment of women and Children from 
                poor and marginalised communities leading to improvement in their lives and livelihoods.
              </p>
             
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: " Our Vision",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Our Vision</h3>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          <strong>Life Begins</strong> Envission to meet the basic needs of unprivileged to 
                          spread the power of education to inspire the healthier Communities connecting a
                          people by livelihood and implement the solution to Rehabilition.
                        </p>
                      </div>
                    ),
                  },
                  {
                    tabName: "Our Mission",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Our Mission</h3>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          We exists to work towards creating a strong communities which provides Health, 
                          Education, Empowerment and making essentials requirements for supporting
                          economically weak families to every indivisuals from unprivileged communities.
                        </p>
                      </div>
                    ),
                  },
                  {
                    tabName: "Our Approach",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Our Approach</h3>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          At <strong>Life Begins</strong> we work to ensure that health related issues are
                          looked upon in a holistic manner that is creating awareness, education, setup Health 
                          Camps, Rehabilition, Sanitization and Livelihood.
                        </p>
                      </div>
                    ),
                  },
                  {
                    tabName: "Accountability",

                    tabContent: (
                      <div className={classes.textCenter}>
                        <h3>Accountability</h3>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          We pride ourselves on the cost effectiveness of our work at <strong>Life Begins</strong>
                          , We ensure frequent monitoring and evaluation of plans to ensure programme objectives 
                          are met and funds effectively utilised.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
