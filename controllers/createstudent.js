const mongoose = require('mongoose');
const Student = require('../models/student');

exports.createstudentinfo = async (req, res, next) => {
  try {
    const { name, age } = req.body;

    const student = new Student({ name, age });
    await student.save();

    res.status(201).json({ msg: 'Successfully created' });
  } catch (error) {
    res.status(500).json({ err: 'Something went wrong' });
  }
};
