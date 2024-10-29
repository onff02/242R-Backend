const express = require('express');
const app = express();
const PORT = 3000;

const factorial = (n) => {
    if (n < 0) return "Undefined";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

app.get('/factorial', (req, res) => {
    const number = req.query.number;

    if (!number) {
        return res.send("Error: Please provide a number in the query.");
    }

    res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);

    if (isNaN(number)) {
        return res.send("Error: Please provide a valid number.");
    }

    const result = factorial(number);
    res.send(`Factorial of ${number} is ${result}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
