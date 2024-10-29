const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const stringifyObject = (obj) => {
    return Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
};

app.get('/', (req, res) => {
    const queryData = req.query;
    const responseText = `GET method :\n${stringifyObject(queryData)}`;
    res.send(responseText);
});

app.post('/', (req, res) => {
    const bodyData = req.body;
    const responseText = `POST method :\n${stringifyObject(bodyData)}`;
    res.send(responseText);
});

app.put('/', (req, res) => {
    const bodyData = req.body;
    const responseText = `PUT method :\n${stringifyObject(bodyData)}`;
    res.send(responseText);
});

app.delete('/', (req, res) => {
    const bodyData = req.body;
    const responseText = `DELETE method :\n${stringifyObject(bodyData)}`;
    res.send(responseText);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});