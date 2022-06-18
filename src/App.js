import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import World from "./components/World";
import Sports from "./components/Sports";
import Business from "./components/Business";
import Politics from "./components/Politics";
import Entertainment from "./components/Entertainment";
import Home from "./components/Home";
import Cricket from "./components/Cricket";
import SportsAll from "./components/SportsAll";
import Football from "./components/Football";
import WorldAll from "./components/WorldAll";
import India from "./components/India";
import US from "./components/US";
import China from "./components/China";
import Japan from "./components/Japan";
import Russia from "./components/Russia";
import Britain from "./components/Britain";
import France from "./components/France";
import Canada from "./components/Canada";
import SK from "./components/SK";
import Germany from "./components/Germany";
import Brazil from "./components/Brazil";
import Italy from "./components/Italy";
import Australia from "./components/Australia";
import Turkey from "./components/Turkey";
import Health from "./components/Health";
import Science from "./components/Science";
import Technology from "./components/Technology";


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="world" element={<World />}>
              <Route index element={<WorldAll/>}/>
              <Route path="all" element={<WorldAll/>}/>
              <Route path="in" element={<India/>}/>
              <Route path="us" element={<US/>}/>
              <Route path="cn" element={<China/>}/>
              <Route path="jp" element={<Japan/>}/>
              <Route path="ru" element={<Russia/>}/>
              <Route path="gb" element={<Britain/>}/>
              <Route path="fr" element={<France/>}/>
              <Route path="ca" element={<Canada/>}/>
              <Route path="kr" element={<SK/>}/>
              <Route path="de" element={<Germany/>}/>
              <Route path="br" element={<Brazil/>}/>
              <Route path="it" element={<Italy/>}/>
              <Route path="au" element={<Australia/>}/>
              <Route path="tr" element={<Turkey/>}/>
            </Route>
            <Route path="sports" element={<Sports />}>
              <Route index element={<SportsAll/>}/>
              <Route path="all" element={<SportsAll/>}/>
              <Route path="cricket" element={<Cricket/>}/>
              <Route path="football" element={<Football/>}/>
            </Route>
            <Route path="business" element={<Business />} />
            <Route path="politics" element={<Politics />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="health" element={<Health/>}/>
            <Route path="science" element={<Science />}/>
            <Route path="technology" element={<Technology />}/>
          
        </Routes>
      </>
    );
  }
}
