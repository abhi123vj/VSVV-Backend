module.exports = (func) => (req, res, next) => Promise.resolve(func(req, res, next)).then((value) => {
    next
}, (reason) => {
    res.status(400).json({success: true, greeting: "API Failed", reason: reason});
},);
