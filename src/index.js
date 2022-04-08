import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";

import CausePage from "views/LandingPage/CausePage";
import AboutPage from "views/LandingPage/AboutPage";
import GovernacePage from "views/LandingPage/GovernancePage";
import WhatWeDo from "views/LandingPage/WhatWeDoPage";
import AccountPage from "views/LandingPage/AccountPage";
//cause page
import HealthPage from "views/LandingPage/HealthPage";
import EducationPage from "views/LandingPage/EducationPage";
import SanitizationPage from "views/LandingPage/SanitizationPage";
import RehabPage from "views/LandingPage/RehabPage";
import LivelihoodPage from "views/LandingPage/LivelihoodPage";
import Jobs from "views/LandingPage/Jobs";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/**cause pages */}
      <Route path="/health" component={HealthPage} />
      <Route path="/education" component={EducationPage} />
      <Route path="/sanitization" component={SanitizationPage} />
      <Route path="/rehab" component={RehabPage} />
      <Route path="/livelihood" component={LivelihoodPage} />
      {/**cause pages */}
      <Route path="/about" component={AboutPage} />
      <Route path="/jobs" component={Jobs} />

      <Route path="/account" component={AccountPage} />
      <Route path="/governance" component={GovernacePage} />
      <Route path="/contact" component={WhatWeDo} />
      <Route path="/cause" component={CausePage} />
    
      <Route path="/" component={Components} />
    
    </Switch>
  </Router>,
  document.getElementById("root")
);
