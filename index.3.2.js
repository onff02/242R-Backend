const express = require('express');
const app = express();
const PORT = 3000;

app.get('/board/page/:page', (req, res) => {
    const pageNumber = req.params.page;
    
    res.send(`You are viewing page number: ${pageNumber}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});