const express = require('express');
const app = express();
const port = 3000;

const databaseConnection = require('./database/mongoConnection');

// Middleware for parsing JSON
app.use(express.json());

// MongoDB routes
const mongoRoutes = require('./routes/mongoDBRoute');
app.use('/api/mongo', mongoRoutes);

// PostgreSQL routes
const postgresRoutes = require('./routes/postgresRoutes');
app.use('/api/postgres', postgresRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

databaseConnection();