import React from "react";
import styles from "./app.css";
import "whatwg-fetch";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    fetch("/api/photo").then((response) => {
      var photos = response.json().then((photos) => {
        var photo = photos[0];
        this.setState({
          photo: {
            url: "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"
          }
        })
      });
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <img src={this.state.photo.url} />
      </div>
    );
  }
}
