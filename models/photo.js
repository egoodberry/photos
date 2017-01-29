var dateFormat = require("dateformat");
var slug = require("slug");

class Photo {
  constructor(data) {
    this.id = data.id;
    this.farm = data.farm;
    this.server = data.server;
    this.secret = data.secret;
    if (data.dates) {
      this.datePosted = new Date(data.dates.posted * 1000);
    }
    if (typeof data.title === "object") {
      this.title = data.title._content;
    }
    else {
      this.title = data.title;
    }
  }

  toJson() {
    return {
      id: this.id,
      slug: this.slug,
      url: this.url,
      date: this.date,
      title: this.title
    };
  }

  get slug() {
    return slug(this.title, { lower: true });
  }

  get url() {
    return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}_b.jpg`;
  }

  get date() {
    if (this.datePosted) {
      return dateFormat(this.datePosted, "mmmm yyyy");
    }
    else {
      return "";
    }
  }
}

module.exports = Photo;
