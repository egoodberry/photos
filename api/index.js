const request = require("request");
const routes = require("express").Router();

const baseUrl = "https://api.flickr.com/services/rest";

routes.get("/photo", (req, res) => {
  request({
    url: baseUrl +
          "?&method=flickr.photos.search&tags=featured" +
          "&api_key=" + process.env.FLICKR_API_KEY +
          "&user_id=" + process.env.FLICKR_USER_ID +
          "&format=json&nojsoncallback=1",
    json: true 
  }, (error, response, body) => {
    res.json(response.body.photos.photo);
  });
});

module.exports = routes;
