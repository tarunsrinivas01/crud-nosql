const mongoose = require('mongoose');
const Student = require('../models/student');

exports.updatedetails = async (req, res, next) => {
  try {
    const id = req.body.id;
    const name = req.body.name;

    const student = await Student.findByIdAndUpdate(id, { name: name });

    if (student) {
      res.status(200).json({ details: 'Success' });
    } else {
      res.status(404).json({ details: 'No student records found' });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
