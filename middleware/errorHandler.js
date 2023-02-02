const errorhandler = (err, req, res, next) => {
    const httpStatusCode = res.httpStatusCode ? res.httpStatusCode : 500
    res.status(httpStatusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack

    });

}

module.exports = {
    errorhandler,
}
