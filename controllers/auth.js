const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const login = async (req, res) => {
  res.send('login')
}

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

module.exports = {
  login,
  register,
}