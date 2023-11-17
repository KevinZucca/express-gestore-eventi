const Model = require("../models/event");
const fs = require("fs");
const jsonEvents = require("../events.json");
const path = require("path");

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
  let jsonEvents = require("../events.json");
  const event = jsonEvents.find((el) => el.id == req.params.event);

  if (req.body.title) {
    event.title = req.body.title;
  }
  if (req.body.description) {
    event.description = req.body.description;
  }
  if (req.body.date) {
    event.date = req.body.date;
  }
  if (req.body.maxSeats) {
    event.maxSeats = Number(req.body.maxSeats);
  }
  const newJson = JSON.stringify(jsonEvents, null, 2);
  fs.writeFileSync(path.resolve(__dirname, "../", "events.json"), newJson);
  res.json(event);
}

module.exports = {
  index,
  show,
  store,
  update,
};
