import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Sanitization() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Lets talk about Sanitization</h2>
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
            Sanitization systems aim to protect human health by providing a clean environment that 
            will stop the transmission of disease, especially through the fecal–oral route. Diarrhea, 
            a main cause of malnutrition and stunted growth in children, can be reduced through 
            adequate Sanitization Like, Personal Hygiene, Household Cleanliness, Community Cleanliness.
            </p>
            <p>
            Too weak to attend work or school, many people are forced to buy expensive medicine, 
            becoming trapped in an endless cycle of poverty. As well as being a public health issue, 
            sanitization is also, undoubtedly, a major contributor to social injustice and poverty.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
