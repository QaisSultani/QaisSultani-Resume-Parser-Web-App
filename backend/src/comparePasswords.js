const bcrypt = require('bcrypt');

const comparePasswords = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}
module.exports = comparePasswords