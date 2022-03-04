const mongoose = require('mongoose');

const contact = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  message: {
    type: String
  }
},{timestamps:true})

const Contact = mongoose.model('contacts', contact);
module.exports = Contact