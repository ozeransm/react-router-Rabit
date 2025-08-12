export default function auth(req, res, next) {
  req.auth = true;
  next();
}
