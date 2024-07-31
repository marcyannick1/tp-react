const {verifyToken} = require("../utils/jwt");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = verifyToken(token, process.env.TOKEN_SECRET);
        const userId = decodedToken.userId;
        // On attache l'userId à l'objet request pour l'utiliser dans les contrôleurs
        req.auth = { userId };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};

module.exports = {
    authMiddleware
};
