const mongoose = require('mongoose');
const Student = require('../models/student');

exports.getstudentdetails = async (req, res, next) => {
  try {
    const id = req.body.id;
    const student = await Student.findById(id);

    if (student) {
      res.status(200).json({ details: student });
    } else {
      res.status(404).json({ details: 'No student records found' });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
