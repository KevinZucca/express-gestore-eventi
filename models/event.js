const fs = require("fs");

class Model {
  constructor(id, title, description, date, maxSeats) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.date = date),
      (this.maxSeats = maxSeats);
  }

  static seeEvents() {
    const jsonFile = require("../events.json");
    return jsonFile;
  }

  static saveNewEvent(event) {
    const jsonFile = require("../events.json");
    jsonFile.push(event);
    const newJsonFile = fs.readFileSync(JSON.stringify(jsonFile));
    return newJsonFile;
  }
}

module.exports = Model;
