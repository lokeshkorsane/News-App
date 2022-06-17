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


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="world" element={<World />} />
            <Route path="sports" element={<Sports />}>
              <Route index element={<SportsAll/>}/>
              <Route path="all" element={<SportsAll/>}/>
              <Route path="cricket" element={<Cricket/>}/>
              <Route path="football" element={<Football/>}/>
            </Route>
            <Route path="business" element={<Business />} />
            <Route path="politics" element={<Politics />} />
            <Route path="entertainment" element={<Entertainment />} />
          
        </Routes>
      </>
    );
  }
}
