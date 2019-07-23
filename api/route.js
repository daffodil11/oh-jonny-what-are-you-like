const router = require('express').Router();
const { produceReport } = require('./controllers');

router.route("/api/produce-report").post(produceReport);