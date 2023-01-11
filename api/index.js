const server = require('./src/app.js');
const { eventsToDb } = require('./src/controllers/getEvents.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    await eventsToDb()
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
