import React, {useEffect,useState} from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import CaseStatus from "./components/pages/CaseStatus";
import CourtOrders from "./components/pages/CourtOrders";
import CauseList from "./components/pages/CauseList";
import Caveate from "./components/pages/Caveate";
import SupremeCourt from "./components/SupremeCourt";
import Footer from "./components/Footer";

import Crm from "./CRMComponent/Crm";
import DistrictCourts from "./components/DistrictCourts";
function App() {



 

  return (
    <>
    <Router>
     <Navigation />
     <Routes>
      <Route path= "/*" element ={<Crm />} />
      <Route path="/CaseStatus/*" element={<CaseStatus />} />
      <Route path="/CourtOrders/*" element={<CourtOrders />} />
      <Route path ="/CauseList" element = {<CauseList/>} />
      <Route path ="/caveate" element = {<Caveate/>} />
      <Route path="/HighCourt" element={<SupremeCourt />} />
      <Route path="/DistrictCourts" element={<DistrictCourts />} />
     </Routes>
     </Router>    
     
     <Footer />
  
    </>
  );
}

export default App;
