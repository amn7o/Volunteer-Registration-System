const Volunteer = require("../models/Volunteer");

exports.registerVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);

    res.status(201).json({
      success: true,
      volunteer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();

    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteVolunteer = async (req, res) => {
  try {
    await Volunteer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Volunteer Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};