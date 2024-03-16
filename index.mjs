const PORT = process.env.PORT || 1577;

import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/fetch/:wait', async (req, res) => {
    const wait = req.params.wait;
    var url = req.query.url;
    url = decodeURIComponent(url);
    console.log('Fetching:', url);
    setTimeout(async () => {
        try {
            fetch(url);
        } catch { }
    }, wait);
    res.send('Arranged');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

