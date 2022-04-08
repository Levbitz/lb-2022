import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Education() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Lets talk about Education</h2>
          {/*<h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
  </h5>*/}
        </GridItem>
      </GridContainer>
      <div>
        <div className="row">
          <div className="col">
            <p>
            According to UNESCO Out-of-School children report (published in 2015), 17.7 million children 
            in India are estimated to be out of school.
            </p>
            <p>
            One in Eleven children go to work when they should be in school. When it is hard to afford 
            necessities like food, shelter, and clothing; education becomes a luxury that the poor give up. 
            Illiteracy then leads to further poverty. Donate for child education to Life Begins, 
            support them with fees, school supplies, footwear, transport and opportunities to 
            showcase their talents.
            </p>
            <p>
            Millions of children are still denied their right to education because of poverty. 
            Donate for the education of poor children and support them with necessities like tuition fees, 
            school supplies, footwear, transport, etc. Help them build a future that will make them escape 
            poverty passed from generation to generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
