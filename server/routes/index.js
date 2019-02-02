module.exports = app => {
    require('./createPdf')(app);
    require('./fetchPdf')(app);
}