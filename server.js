const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Mongo cluster connected
connectDB();

//using express parser instead of body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running'));

//defining routes

app.use('/contactus', require('./Routes/ContactRouter'));
app.use('/events', require('./Routes/EventRouter'));
app.use('/github', require('./Routes/GitHubRouter'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
