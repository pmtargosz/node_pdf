const CreatPdfController = require('../controllers/creatPdfController');

const createPdf = app => {
    app.post('/create-pdf', CreatPdfController);
};

module.exports = createPdf;