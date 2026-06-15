const express = require("express");

const {
  registerVolunteer,
  getVolunteers,
  deleteVolunteer,
} = require("../controllers/volunteerController");

const router = express.Router();

router.post("/register", registerVolunteer);

router.get("/", getVolunteers);

router.delete("/:id", deleteVolunteer);

module.exports = router;