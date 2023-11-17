class Reservation {
  constructor(id, firstName, lastName, email, eventId) {
    (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email),
      (this.eventId = eventId);
  }
}

module.exports = Reservation;
