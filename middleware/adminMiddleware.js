const userModel = require("../models/userModels");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.id);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    if (user.usertype !== "admin") {
      return res.status(403).send({
        success: false,
        message: "Only Admin Access",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unauthorized Access",
      error,
    });
  }
};
