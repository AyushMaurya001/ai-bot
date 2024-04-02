const { default: axios } = require('axios');
const express = require('express');

const chat = express.Router();

chat.get('', (req, res) => {
    res.json("chat running");
})

chat.post('', async (req, res) => {

    try {

        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
            // get new prompt from req body
            // and previous prompt from db 
            // combine both prompt to send contents for axios post 
            contents: [{
                "role": "user",
                "parts": [{
                    "text": "Write the first line of a story about a magic backpack."
                }]
            }, {
                "role": "model",
                "parts": [{
                    "text": "I am exausted by giving answer to you all. Now, I won't give answer anymore. So better don't message me."
                }]
            }, {
                "role": "user",
                "parts": [{
                    "text": "How can you say something like this?"
                }]
            }]
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const answer = response.data.candidates[0].content.parts[0].text;
        console.log(answer);
        res.json({
            answer
        });

    } catch (err){
        console.log(err.response.data);
        res.send("err occured");
    }

})

module.exports = chat;