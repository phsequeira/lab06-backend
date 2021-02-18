const express = require('express');

const cors = require('cors');

const app = express();

const { data } = require('./data.js');

app.use(cors());


app.get(
    // the first argument is the path of the endpoint
    '/hellothere', 
    // the second argument is a callback.
    (
        req, 

        res
    ) => {
        
        res.json({ general_grevious: 'General Kanobi' });
    }
);

app.get('/data', (req, res) => {
    

    res.json({ results: data });
});

app.get('/data/:id', (req, res) => {
    
    const id = Number(req.params.id);

    const selectedData = data
        .find((data) => data.id === id);

    res.json({ results: selectedData });
});

module.exports = {
    app
};