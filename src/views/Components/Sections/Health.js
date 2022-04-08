import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Health() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Lets talk about Health</h2>
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
            2.4 million indians die of treatable condition evert years! Healthcare is a luxury 
            which is inaccessible for the health cannot be privileged support then which access to 
            medical help like Health Camps, Health Awareness Programmes. Referral service to government 
            hospital, provide the basic needs of medical facilities medical awareness.
            </p>
            <p>
            Healthcare always remains as top priority for Us. We continue to address the health needs of 
            underprivileged children and women through our dedicated health centre. We believe, 
            that only providing basic health care is not enough, as every individual also deserves dignity. 
            So at Life Begins, we ensure the same by providing them respect and human touch.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
