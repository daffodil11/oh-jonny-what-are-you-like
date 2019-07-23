const fetchData = require('./models');

exports.produceReport = (req, res, next) => {
    const { url } = req.body;
    fetchData(url);
}