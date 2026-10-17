// Returns the visitor's country (ISO 3166-1 alpha-2) as detected by Vercel's
// edge network, so the English page can offer the Arabic version to visitors
// in the GCC. Nothing is stored or logged by this function.
module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'private, no-store');
  res.statusCode = 200;
  res.end(JSON.stringify({ country: req.headers['x-vercel-ip-country'] || null }));
};
