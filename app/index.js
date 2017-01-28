import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import PhotoList from "./PhotoList.js";
import Photo from "./Photo.js";
import styles from "./index.css";

const Home = React.createClass({
  render: function() {
    return (
      <Photo id="32377248835" />
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="photos" component={PhotoList} />
    <Route path="photos/:id/:slug" component={Photo} />
  </Router>
), document.getElementById("root"));
