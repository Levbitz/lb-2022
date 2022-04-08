import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Rehab() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Problems With Rehabilitation in India & Measures to Resolve Them</h2>
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
            India records around ten suicides related to drug or alcohol addiction every day,
            according to official figures.The figures also revealed that the country witnessed a 
            455% increase in drug hauls from 2011 to 2013. If you are an alcoholic or is suffering 
            from drug usage, a rehabilitation center is your best bet. Many people are able to get 
            their life back on track after taking treatments at rehabilitation centers
            </p>
            <p>
            Due to an increase in non-communicable diseases and life expectancy because of 
            alteration in structure of age, the issue of disability is expected to become more severe..
            </p>
            <p>
            In spite of that, around 40 million people afflicted with disabilities in the nation 
            as per official figures have not benefited from the development and low employment is 
            a major problem being faced by them in government as well as private sectors.
            The fall in employment rate of the disabled people is not only due to the fact 
            that private sectors have been ignorant towards them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
