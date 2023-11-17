const fs = require("fs");
const path = require("path");

class Model {
  constructor(id, title, description, date, maxSeats) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.date = date),
      (this.maxSeats = maxSeats);
  }

  static seeEvents(query) {
    let jsonFile = require("../events.json");
    if (query && Object.keys(query).length > 0) {
      jsonFile = this.filterResearch(query, jsonFile);
    }
    return jsonFile;
  }

  static seeSingleEvent(id) {
    const jsonFile = require("../events.json");
    const singleEvent = jsonFile.find((el) => el.id == id);
    return singleEvent;
  }

  static saveNewEvent(event) {
    // create the new ID
    this.createID(event.id);
    // write the new json file
    const jsonFile = require("../events.json");
    jsonFile.push(event);
    const newJsonFile = JSON.stringify(jsonFile, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../", "events.json"),
      newJsonFile
    );
    const finalJson = JSON.parse(newJsonFile);
    return finalJson;
  }

  static createID(id) {
    const jsonFile = require("../events.json");
    const idList = jsonFile.map((event) => event.id);
    const orderedIdList = idList.sort((a, b) => b - a);
    const newId = orderedIdList[0] + 1;
    id = newId;
    return id;
  }

  static filterResearch(query, array) {
    let response = [];
    const { title, date, maxSeats } = query;
    if (title) {
      response = array.filter((event) =>
        event.title.toLowerCase().includes(title)
      );
    }
    if (date) {
      response = array.filter((event) => event.date === date);
    }
    if (maxSeats) {
      response = array.filter((event) => event.maxSeats == maxSeats);
    }
    return response;
  }

  static getReservations(event) {
    const reservationsList = require("../reservations.json");
    const reservations = reservationsList.filter((el) => el.eventId == event);
    if (reservations.length == 0) {
      throw new Error("Non ci sono prenotazioni per questo evento");
    }
    return reservations;
  }
}

module.exports = Model;
