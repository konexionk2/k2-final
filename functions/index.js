const functions = require("firebase-functions");
const next = require("next");

const dev = false;
const app = next({ dev, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest(async (req, res) => {
  // Prepara Next.js y luego maneja la petición
  await app.prepare();
  handle(req, res);
});
