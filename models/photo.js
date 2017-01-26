class Photo {
  constructor(data) {
    this.farm = data.farm;
    this.server = data.server;
    this.id = data.id;
    this.secret = data.secret;
  }

  toJson() {
    return {
      url: this.url()
    };
  }

  url() {
    return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
  }
}

module.exports = Photo;
