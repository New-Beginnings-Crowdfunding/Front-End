import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CampaignStep1 from "./components/campaign-creation/CampaignStep1"
import LandingPage from "./components/LandingPage"


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/create-campaign" component={CampaignStep1}/>
      </div>
    </Router>
  );
}

export default App;
