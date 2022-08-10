// Importing local modules
const { JWT_Verify } = require("../controllers/JWT");
const { users } = require("../models/Users");

// function to check if the request has user authorization
const UserAuth = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization;

        if (authToken) {
            let result = authToken.split(" ");

            if (result.length !== 2)
                return res.status(403).send({ message: "Authentication Token Required." });

            const Token = JWT_Verify(result[1]);

            if (Token) {
                const user = await users.findById(Token._id);

                if (!user)
                    return res
                        .status(403)
                        .send({ message: "You are not authorized to access this link. Contact the admin if you think this is mistake." });

                req.body.user_details = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    profile_picture: user.profile_picture,
                };

                next();
            } else {
                return res.status(403).send({ message: "You are not authorized to access this link. Contact the admin if you think this is mistake." });
            }
        } else {
        return res.status(403).send({ message: "Authentication Token Required." });
        }
    } catch (error) {
        return res.status(501).send({ message: "Server Error. Please try again Later." });
    }
};

// Exports
exports.UserAuth = UserAuth;
