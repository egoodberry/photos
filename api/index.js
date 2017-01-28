const routes = require("express").Router();
const PhotoRepository = require("../services/photo-repository");

routes.get("/photos", (req, res) => {
  PhotoRepository.search({ tags: "featured" }, (photos) => {
    res.json(photos.map((photo) => photo.toJson()));
  });
});

routes.get("/photos/:id", (req, res) => {
  PhotoRepository.fetch(req.params.id, (photo) => {
    res.json(photo.toJson());
  });
});

module.exports = routes;
