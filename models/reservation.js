class Reservation {
  #id;
  #firstName;
  #lastName;
  #email;
  #eventId;
  constructor(id, firstName, lastName, email, eventId) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.eventId = eventId;
  }

  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get email() {
    return this.#email;
  }
  get eventId() {
    return this.#eventId;
  }

  set firstName(value) {
    if (typeof value != "string") {
      throw new Error("Il nome deve essere una stringa");
    }
    if (value.length > 15) {
      throw new Error("Il nome non può avere più di 15 caratteri ");
    }
    this.#firstName = value;
  }

  set lastName(value) {
    if (typeof value != "string") {
      throw new Error("Il cognome deve essere una stringa");
    }
    if (value.length > 15) {
      throw new Error("Il cognome non può avere più di 15 caratteri ");
    }
    this.#lastName = value;
  }

  set email(value) {
    if (typeof value != "string") {
      throw new Error("L'email deve essere una stringa");
    }
    this.#email = value;
  }

  set eventId(value) {
    if (typeof value != "number") {
      throw new Error("L'id dell'evento deve essere un numero");
    }
    this.#eventId = value;
  }
}

module.exports = Reservation;
