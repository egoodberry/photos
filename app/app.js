import React from "react";
import styles from "./app.css";
import Photo from "./photo.js";

export default class App extends React.Component {
  render() {
    return (
      <Photo id={this.props.primaryPhotoId} />
    );
  }
}
