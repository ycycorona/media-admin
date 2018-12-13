const crypto = require('crypto')
const passwdSalt = 'av_data_base'
module.exports = {
    md5(val) {
      const md5 = crypto.createHash('md5')
      return md5.update(val).digest('hex')
    },
  /**
   * 密码加盐转md5,如果传false,return ''
   * @param val
   * @returns {*}
   */
    md5passwdSalt(val) {
      if (!val) {return ''}
      const saltPasswd = `${val}:${passwdSalt}`
      return this.md5(saltPasswd)
    }
};

