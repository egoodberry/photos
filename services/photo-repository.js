const request = require("request");
const querystring = require("querystring");
const Photo = require("../models/photo");


class PhotoRepository {
  static search(params) {
    this.makeRequest("flickr.photos.search", params, (data) => {
      const photos = data.photos.map((photo) => new Photo(photo));
      callback(photos);
    });
  }

  static fetch(photoId, callback) {
    this.makeRequest("flickr.photos.getInfo", { photo_id: photoId }, (data) => {
      callback(new Photo(data.photo));
    });
  }

  static makeRequest(method, params, callback) {
    const requestParams = querystring.stringify(params);

    const url =
      `${this.baseUrl}?` +
      `&method=${method}` +
      `&${requestParams}` +
      `&api_key=${this.apiKey}` +
      `&user_id=${this.userId}` +
      `&format=json&nojsoncallback=1`;

    request({ url: url, json: true }, (error, response) => {
      callback(response.body);
    });
  }

  static get baseUrl() {
    return "https://api.flickr.com/services/rest";
  }

  static get apiKey() {
    return process.env.FLICKR_API_KEY;
  }

  static get userId() {
    return process.env.FLICKR_USER_ID;
  }
}

module.exports = PhotoRepository;
