import React, { useState } from "react";
import "./App.css";
import Header from "../Header/header";
import Menu from "../Menu/menu";
import Main from "../Main/main";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Address from "../Address/address";
import News from "../News/news";

function App() {
  return (
    <Switch>
      <React.Fragment>
        <div className="app">
          <Header />
          <div className="wrapper">
            <Menu />
            <Route path="/" exact={true}>
              <Main children={<News />}></Main>
            </Route>
            <Route path="/address">
              <Main children={<Address />} />
            </Route>
          </div>
        </div>
      </React.Fragment>
    </Switch>
  );
}

export default App;
