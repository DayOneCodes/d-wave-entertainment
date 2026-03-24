const verifyRole = (role) => (req, res, next) => {

  if (req.role === role) {
    return next()
  }

  return res.status(403).json({message: "Forbidden"})
}

export { verifyRole };