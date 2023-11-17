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

  static seeEvents() {
    const jsonFile = require("../events.json");
    return jsonFile;
  }

  static seeSingleEvent(id) {
    const jsonFile = require("../events.json");
    const singleEvent = jsonFile.find((el) => el.id == id);
    return singleEvent;
  }

  static saveNewEvent(event) {
    this.createID(event.id);
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
}

module.exports = Model;
