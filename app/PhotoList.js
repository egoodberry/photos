import React from "react";
import styles from "./PhotoList.css";

export default class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch("/api/photos").then((response) => {
      response.json().then((photos) => {
        this.setState({ photos: photos });
      });
    })
  }

  render() {
    return (
      <section>
        {
          this.state.photos.map((photo) => {
            return <a href={`/photos/${photo.id}/${photo.slug}`} key={photo.id}>
              <img src={photo.thumbnailUrl} />
            </a>
          })
        }
      </section>
    );
  }
}
