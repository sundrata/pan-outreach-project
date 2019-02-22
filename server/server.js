
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const personRouter = require('./routes/person.router');
const uploadRouter = require('./routes/upload.router');
const sheetMusicRouter = require('./routes/sheetMusic.router');
const lessonRouter = require('./routes/lesson.router');
const categoryRouter = require('./routes/category.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/person', personRouter);
app.use('/api/upload/', uploadRouter);
app.use('/api/music/', sheetMusicRouter);
app.use('/api/lesson', lessonRouter);
app.use('/api/category', categoryRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

// if (process.env.NODE_ENV === 'production') {
//   // Exprees will serve up production assets
//   app.use(express.static('client/build'));

//   // Express serve up index.html file if it doesn't recognize route
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
