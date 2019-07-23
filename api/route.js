const router = require('express').Router();
const { produceReport } = require('./controllers');

router.route("/produce-report").post(produceReport);

module.exports = router;