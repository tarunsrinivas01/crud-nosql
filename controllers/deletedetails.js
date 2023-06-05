const mongoose = require('mongoose');
const Student = require('../models/student');

exports.deletestudentdetails = async (req, res, next) => {
  try {
    const id = req.body.id;

    const response = await Student.findByIdAndDelete(id);

    if (response) {
      res.status(200).json({ details: 'Success deleted' });
    } else {
      res.status(404).json({ details: 'No student records found' });
    }
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
