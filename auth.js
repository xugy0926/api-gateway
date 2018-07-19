const jwt = require('jwt-simple')

const auth = function (req, res, next) {
  const token = req.headers['x-access-token'] || ''

  if (!token) {
    res.stauts(401).end('Access token not found')
    return
  }

  try {
    const decoded = jwt.decode(token, 'secret-key')

    if (!decoded.user_id && !decoded.user_name && !decoded.exp) {
      res.status(401).end('Access token illegal')
    }

    if (decoded.exp <= Date.now()) {
      res.status(401).end('Access token has expired', 400)
    } else {
      next()
    }
  } catch (err) {
    res.status(401).end('Access token failed')
  }
}

module.exports = auth
