function checkNameMiddleware(req, res, next) {

    if (req.query.name === undefined) {

        return res.status(400).json({
            message: "name query parameter is required"
        });

    }

    next();

}

module.exports = checkNameMiddleware;
