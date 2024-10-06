const handleErrors = (res, error) => {
    res.status(400).json({ error: error.message });
};

module.exports = { handleErrors };
