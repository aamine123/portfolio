const express = require('express');
const nodemailer = require("nodemailer");



const route = express.Router();


const contact = (req, res, next) => {
    const { fullName, email, company, message } = req.body;
    res.json({
        "fullName": fullName,
        "email": email,
        "company": company,
        "message": message
    })
}


route.post('/', contact)


module.exports = route;