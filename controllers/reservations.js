const Model = require("../models/event");

function index(req, res) {
  const reservations = Model.getReservations(req.params.event);
  res.json(reservations);
}

function store(req, res) {
  res.json("ok");
}

function destroy(req, res) {
  res.json("ok");
}

module.exports = {
  index,
  store,
  destroy,
};
