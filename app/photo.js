import React from "react";
import styles from "./photo.css";

export default class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    fetch("/api/photos/" + this.props.id).then((response) => {
      response.json().then((photo) => {
        this.setState({ photo: photo });
      });
    })
  }

  render() {
    return (
      <section className={styles.photo}>
        <img src={this.state.photo.url} />
        <section className="photo-metadata">
          {this.state.photo.title}
          {this.state.photo.description}
          {this.state.photo.date}
        </section>
      </section>
    );
  }
}
