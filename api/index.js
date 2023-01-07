const server = require('./src/app.js');
const { eventsToDb } = require('./src/controllers/getEvents.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await eventsToDb()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
