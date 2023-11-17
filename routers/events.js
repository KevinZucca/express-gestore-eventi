const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events");
const reservationsController = require("../controllers/reservations");

// events routes
router.get("/", eventsController.index);
router.post("/", eventsController.store);
router.get("/:id", eventsController.show);
router.put("/:event", eventsController.update);

// reservations routes
router.get("/:event/reservations", reservationsController.index);
router.post("/:event/reservations", reservationsController.store);
router.delete(
  "/:event/reservations/:reservation",
  reservationsController.destroy
);

module.exports = router;
