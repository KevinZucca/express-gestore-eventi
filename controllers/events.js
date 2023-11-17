const Model = require("../models/event");

function index(req, res) {
  const allEvents = Model.seeEvents(req.query);
  res.json(allEvents);
}

function show(req, res) {
  const singleEvent = Model.seeSingleEvent(req.params.id);
  if (!singleEvent) {
    throw new Error("L'id non corrisponde o non esiste");
  }
  res.json(singleEvent);
}

function store(req, res) {
  const newEvent = new Model(
    Model.createID(req.body.id),
    req.body.title,
    req.body.description,
    req.body.date,
    req.body.maxSeats
  );

  const updatedList = Model.saveNewEvent(newEvent);
  res.json(updatedList);
}

function update(req, res) {
  res.json(Model);
}

module.exports = {
  index,
  show,
  store,
  update,
};
