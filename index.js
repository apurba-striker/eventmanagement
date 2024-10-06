const express = require('express');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/events', eventRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
