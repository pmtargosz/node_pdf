const FetchPdfController = require('../controllers/fetchPdfController');

const fetchPdf = app => {
    app.get('/fetch-pdf', FetchPdfController)
}

module.exports = fetchPdf;