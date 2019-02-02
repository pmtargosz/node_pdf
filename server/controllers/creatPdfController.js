const pdf = require('html-pdf');
const pdfTemplate = require('../documents');

module.exports = async (req, res, next) => {
    try {
        await pdf.create(pdfTemplate(req.body), {}).toFile('pdfs/result.pdf', () => {});
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500)
    }
}