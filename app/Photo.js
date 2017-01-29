import React from "react";
import styles from "./Photo.css";

export default class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    const photoId = this.props.params ? this.props.params.id : this.props.id;

    fetch("/api/photos/" + photoId).then((response) => {
      response.json().then((photo) => {
        this.setState({ photo: photo });
      });
    })
  }

  render() {
    return (
      <section>
        <a href="/photos" className={styles.browse}>
          Browse
        </a>

        <section className={styles.photo}>
          <div className={styles.image} style={{ backgroundImage: `url(${this.state.photo.url})` }}>
          </div>

          <section className={styles.metadata}>
            <span className={styles.title}>
              {this.state.photo.title},&nbsp;
            </span>
            <span className={styles.date}>
              {this.state.photo.date}
            </span>
          </section>
        </section>

      </section>
    );
  }
}
