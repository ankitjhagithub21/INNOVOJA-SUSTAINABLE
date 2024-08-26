require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDb = require('./conn');
const teamRouter = require('./routes/teamRoutes');
const authRouter = require('./routes/authRoutes');
const aboutRouter = require('./routes/aboutRoutes');
const app = express();
const port = process.env.PORT || 3000;



// Middleware setup
app.use(express.json());
app.use(cors({
  origin: [process.env.ORIGIN1, process.env.ORIGIN2],
  credentials: true
}));
app.use(cookieParser());


// Routes setup
app.use("/auth", authRouter);
app.use("/team", teamRouter);
app.use("/about", aboutRouter);


// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: "API is working."
  });
});

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});
