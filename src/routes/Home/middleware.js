const homeGlobalMiddleware = (req, res, next) => {
  console.log("[🐯] `Home` global middleware called.");
  next();
};

module.exports = {
  homeGlobalMiddleware,
};
