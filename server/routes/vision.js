const express = require('express');

const vision = express.Router();

vision.get('', (req, res) => {
    res.json({
        msg: "hurrayy"
    })
})

vision.post('', (req, res) => {

})

module.exports = vision;