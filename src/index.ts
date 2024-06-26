import bodyParser from 'body-parser';
import { app } from './app';
import express from 'express';
import { SETTINGS } from './settings';
import { startMongo } from './data/db/db';

(async () => {
  await startMongo();

  app.listen(SETTINGS.PORT, () => {
    console.log(SETTINGS.PORT);
  });
})();
