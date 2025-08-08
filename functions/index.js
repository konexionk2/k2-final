const functions = require("firebase-functions");
const next = require("next");

const dev = false;
const app = next({ dev, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();
const appPrepared = app.prepare();

exports.nextApp = functions.https.onRequest(async (req, res) => {
  await appPrepared;
  return handle(req, res);
});
