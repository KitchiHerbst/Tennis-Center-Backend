module.exports = function isLoggedInMember(req, res, next) {
  //req.user
  req.cookies["connect.sid"] && req.user ? next() : res.sendStatus(401);
};
