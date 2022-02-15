const express = require("express");
const Middleware = require("./middleware");
const router = express.Router();
const { httpResponse } = require("../../constant");

router.use(Middleware.homeGlobalMiddleware);

router.get("/", (req, res, next) => {
  return res.status(200).json({
    ...httpResponse[200],
    message: "Congratulations! the server has been setup.",
  });
});

router.all("*", (req, res, next) => {
  return res.status(404).json({
    ...httpResponse[404],
    message: "You're lost, back to your previous pathway.",
  });
});

module.exports = router;
