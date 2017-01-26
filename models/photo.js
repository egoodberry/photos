var dateFormat = require('dateformat');

class Photo {
  constructor(data) {
    this.id = data.id;
    this.farm = data.farm;
    this.server = data.server;
    this.secret = data.secret;
    this.datePosted = new Date(data.dates.posted * 1000);
    this.title = data.title._content;
    this.description = data.descriptio;
  }

  toJson() {
    return {
      url: this.url(),
      date: this.date(),
      title: this.title,
      description: this.description
    };
  }

  url() {
    return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
  }

  date() {
    return dateFormat(this.datePosted, "mmmm yyyy");
  }
}

module.exports = Photo;
