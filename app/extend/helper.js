const passwdSalt = 'av_data_base'
const squel = require("squel");
const thinkHelper = require('think-helper')

const helper = {
  /**
   * 密码加盐转md5,如果传false,return ''
   * @param val
   * @returns {*}
   */
  md5passwdSalt(val) {
    if (!val) {
      return ''
    }
    const saltPasswd = `${val}:${passwdSalt}`
    return this.md5(saltPasswd)
  },
  squel,
  squelMysql: squel.useFlavour('mysql')
}
Object.assign(helper, thinkHelper)

module.exports = helper

