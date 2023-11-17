const Reservation = require("../models/reservation");

function index(req, res) {
  res.send("reservations");
}

function store(req, res) {
  res.send("reservations");
}

function destroy(req, res) {
  res.send("reservations");
}

module.exports = {
  index,
  store,
  destroy,
};
