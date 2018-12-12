const crypto = require('crypto')
const passwdSalt = 'av_data_base'
module.exports = {
    md5(val) {
      const md5 = crypto.createHash('md5')
      return md5.update(val).digest('hex')
    },
    md5asswdSalt(val) {
      const saltPasswd = `${val}:${passwdSalt}`
      return this.md5(saltPasswd)
    }
};

