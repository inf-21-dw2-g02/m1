const auth = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log("True");
    console.log(req.user);
    return next();
  } else {
    console.log("False");
    console.log(req.user);
  }
  res.redirect("/login");
};

module.exports = auth;