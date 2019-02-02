module.exports = (req, res, next) => {
    res.sendFile(`${process.cwd()}/pdfs/result.pdf`)
}