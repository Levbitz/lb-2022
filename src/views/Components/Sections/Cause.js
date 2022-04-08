import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// react components for routing our app without refresh
//import { Link } from "react-router-dom";

// @material-ui/icons
import Sanitization from "@material-ui/icons/LocalDrink";
import Rehab from "@material-ui/icons/SportsKabaddi";
import Health from "@material-ui/icons/Favorite";
import Livelihood from "@material-ui/icons/MonetizationOn";
import Educ from "@material-ui/icons/School";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

// import Icon from "components/Icons/Icon";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2 className="center white">Cause</h2>
          </div>

          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Health",
                    tabIcon: Health,
                    tabContent: (
                      <span>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          2.4 million indians die of treatable condition evert years!
                          Healthcare is a luxury which is inaccessible for the health cannot be
                          privileged support then which access to medical help like Health Camps, 
                          Health Awareness Programmes. Referral service to government hospital, provide
                          the basic needs of medical facilities medical awareness.
                        </p>
                        <br />
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                        Healthcare always remains as top priority for Us. We continue to address the 
                        health needs of underprivileged children and women through our dedicated health centre.
                        We believe, that only providing basic health care is not enough, as every individual 
                        also deserves dignity. So at Life Begins, we ensure the same by 
                        providing them respect and human touch.
                        </p>
                        <br />
                        {/*<button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                          <Link to="/health-page"> Read more</Link>
                        </button>*/}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Education",
                    tabIcon: Educ,
                    tabContent: (
                      <span>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          One in Eleven children go to work when they should be in school. When it is hard to 
                          afford necessities like food, shelter, and clothing; education becomes a luxury 
                          that the poor give up. Illiteracy then leads to further poverty. Donate for 
                          child education to <strong>Life Begins</strong>, support them with fees, 
                          school supplies, footwear, transport and opportunities to showcase 
                          their talents.
                        </p>
                        <br />
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                        20 Million children in India do not go to school. Millions of children are still 
                        denied their right to education because of poverty. Donate for the education of 
                        poor children and support them with necessities like tuition fees, school supplies, 
                        footwear, transport, etc. Help them build a future that will make them escape 
                        poverty passed from generation to generation.
                        </p>
                        <br />
                        {/*<button
                     
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                           <Link to="/education-page"> Read more</Link>
                        </button>*/}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Sanitization",
                    tabIcon: Sanitization,
                    tabContent: (
                      <span>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          Sanitization systems aim to protect human health by providing a clean environment 
                          that will stop the transmission of disease, especially through the fecal–oral route.
                          Diarrhea, a main cause of malnutrition and stunted growth in children, can be 
                          reduced through adequate Sanitization Like, Personal Hygiene, Household
                          Cleanliness, Community Cleanliness.
                        </p>
                        <br />
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                        Too weak to attend work or school, many people are forced to buy expensive medicine, 
                        becoming trapped in an endless cycle of poverty. As well as being a public health 
                        issue, sanitization is also, undoubtedly, a major contributor to social injustice 
                        and poverty.
                        </p>
                        <br />
                        {/*<button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/sanitization-page"> Read more</Link>
                        </button>*/}
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Rehabilition",
                    tabIcon: Rehab,
                    tabContent: (
                      <span>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          Action of storing people from Backward Community to healthy normal life through training
                          and therapy after Addiction or Illness. <strong>Life Begins</strong> ultimate goal of 
                          helping the patient return to a healthy and active lifestyles and bringing back to a 
                          positive condition improve abilities that needed for daily life.
                        </p>
                        <br />
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                        We at Life Begins make sure that the each and every child is taken care of through 
                        our remedial tuition classes. The aims to inculcate a feeling of belongingness and 
                        togetherness that provides help to all Alcoholics and Drug users so as to help 
                        them kick their habit.
                        </p>
                        <br />
                        {/*<button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/rehab-page"> Read more</Link>
                        </button>*/}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Livelihood",
                    tabIcon: Livelihood,
                    tabContent: (
                      <span>
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                        One in eight of the world’s population lives in an Indian village; India’s 
                        600,000 villages contain more of the world’s people living 
                        <strong> Below the Poverty Line</strong> than the whole population of Brazil, 
                        as well as one third of the world’s malnourished children.
                        </p>
                        <br />
                        <p className="black-text" style={{fontSize:16,lineHeight:1.5}}>
                          To Address the <strong>Livelihood</strong> Challanges and marginalized people in 
                          Backward communities and to bring positive changes in their lives, We help people
                          in Livelihood improvement, ensuring food nutrition at the household of community level.
                        </p>
                        <br />
                        {/*<button
                          className="btn waves-effect waves-light indigo"
                          type="submit"
                          name="action"
                        >
                        <Link to="/livelihood-page"> Read more</Link>
                        </button>*/}
                      </span>
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
