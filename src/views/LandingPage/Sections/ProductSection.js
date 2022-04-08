import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/icons
import Sanitization from "@material-ui/icons/LocalDrink";
import Rehab from "@material-ui/icons/SportsKabaddi";
import Health from "@material-ui/icons/Favorite";
import Livelihood from "@material-ui/icons/MonetizationOn";
import Educ from "@material-ui/icons/School";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We Do</h2>
          <h5 className={classes.description}>
          Our main activities include Health,Education,Sanitization etc but are not limited to that.
          We work to promote social or political change on a broad scale or very locally. 
          We play a critical part in developing society, improving communities, 
          and promoting citizen participation
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Health"
              description="2.4 million indians die of treatable condition evert years!
                          Healthcare is a luxury which is inaccessible for the health cannot be
                          privileged support then which access to medical help like Health Camps, 
                          Health Awareness Programmes. Referral service to government hospital, provide
                          the basic needs of medical facilities medical awareness."
              icon={Health}
              iconColor="danger"
              vertical
            />
            <button
            className="btn waves-effect waves-light indigo"
            type="submit"
            name="action"
          >
            <Link to="/health"> Read more</Link>
          </button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Education"
              description="One in Eleven children go to work when they should be in school. When it is hard to 
              afford necessities like food, shelter, and clothing; education becomes a luxury 
              that the poor give up. Illiteracy then leads to further poverty. Donate for 
              child education to Life Begins, support them with fees, 
              school supplies, footwear, transport and opportunities to showcase 
              their talents."
              icon={Educ}
              iconColor="success"
              vertical
            />
            <button
                     
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                           <Link to="/education"> Read more</Link>
                        </button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Sinitazation"
              description="Sanitization systems aim to protect human health by providing a clean environment 
              that will stop the transmission of disease, especially through the fecal–oral route.
              Diarrhea, a main cause of malnutrition and stunted growth in children, can be 
              reduced through adequate Sanitization Like, Personal Hygiene, Household
              Cleanliness, Community Cleanliness."
              icon={Sanitization}
              iconColor="info"
              vertical
            />
            <button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/sanitization"> Read more</Link>
                        </button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Rehabilitation"
              description="Action of storing people from Backward Community to healthy normal life through training
              and therapy after Addiction or Illness. Life Begins ultimate goal of 
              helping the patient return to a healthy and active lifestyles and bringing back to a 
              positive condition improve abilities that needed for daily life."
              icon={Rehab}
              iconColor="danger"
              vertical
            />
            <button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/rehab"> Read more</Link>
                        </button>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Livelihood"
              description="To Address the Livelihood Challanges and marginalized people in 
              Backward communities and to bring positive changes in their lives, We help people
              in Livelihood improvement, ensuring food nutrition at the household of community level."
              icon={Livelihood}
              iconColor="success"
              vertical
            />
            <button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/livelihood"> Read more</Link>
                        </button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
