const express = require('express');
const Contact = require('../Models/contact');



const route = express.Router();


const contact = (req, res, next) => {
    const { fullName, email, company, message } = req.body;

    let contact = new Contact({
        fullName: fullName,
        email: email,
        company: company,
        message: message
    })
    
    contact.save().then(contact => {
        res.status(200).send(JSON.stringify({
            statusCode:200,
            message: 'contact Added Successfully!'
        }))

    }).catch(error => {
        res.status(200).send(JSON.stringify({
            statusCode:204,
            message: error
        }))
    })
}


route.post('/add', contact)


module.exports = route;