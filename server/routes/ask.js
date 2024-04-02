const axios = require('axios');
const express = require('express');
const dotenv = require('dotenv');

const ask = express.Router();
dotenv.config();

ask.post('', async (req, res) => {

    try {
        
        // console.log(req.body.prompt)
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            contents: [{
                parts: [{
                    "text": `${req.body.prompt}`
                }]
            }]
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const answer = response.data.candidates[0].content.parts[0].text
        // console.log(answer);
        res.json(answer)

    } catch (err){
        console.log(err);
        res.status(500).json({
            answer: "Unable to respond (we are facing some internal error)"
        })
    }

})
// connect db 
// setup server and client together

module.exports = ask;