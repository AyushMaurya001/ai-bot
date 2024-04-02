const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const index = require('./routes/index')

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json('Server started')
})

app.use('/api/v1', index)

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}`)
})