function validatePostMiddleware(req, res, next) {
    const { title, content, tags } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    if (!content) {
        return res.status(400).json({
            message: "Content is required"
        });
    }

    if (!Array.isArray(tags)) {
        return res.status(400).json({
            message: "Tags must be an array"
        });
    }

    next();
}

module.exports = validatePostMiddleware;
