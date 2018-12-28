const passwdSalt = 'av_data_base';
const thinkHelper = require('think-helper');

const helper = {
  /**
   * 密码加盐转md5,如果传false,return ''
   * @param val
   * @return {*}
   */
  md5passwdSalt(val) {
    if (!val) {
      return '';
    }
    const saltPasswd = `${val}:${passwdSalt}`;
    return this.md5(saltPasswd);
  },
  /**
   * 驼峰转蛇形命名
   * @param obj
   * @constructor
   */
  objSnakeCase(obj) {
    if (obj && thinkHelper.isArray(obj)) {
      if (obj.length>0 && thinkHelper.isObject(obj[0])) {
        // 数组里包对象
        const newArray = [];
        obj.forEach((item) => {
          const newObj = {};
          Object.keys(item).forEach((key, index) => {
            newObj[thinkHelper.snakeCase(key)] = item[key];
          });
          newArray.push(newObj)
        })
        return newArray
      } else {
        // 数组字符串
        const newArray = [];
        obj.forEach((item) => {
          newArray.push(thinkHelper.snakeCase(item))
        })
        return newArray
      }
    }
    if (obj && thinkHelper.isObject(obj)) {
      // 对象
      const newObj = {};
      Object.keys(obj).forEach((key, index) => {
        newObj[thinkHelper.snakeCase(key)] = obj[key];
      });
      return newObj;
    }
  },
  /**
   * 蛇形转驼峰命名
   * @param obj
   * @constructor
   */
  objCamelCase(obj) {
    if (obj && thinkHelper.isArray(obj)) {
      if (obj.length>0 && thinkHelper.isObject(obj[0])) {
        // 数组里包对象
        const newArray = [];
        obj.forEach((item) => {
          const newObj = {};
          Object.keys(item).forEach((key, index) => {
            newObj[thinkHelper.camelCase(key)] = item[key];
          });
          newArray.push(newObj)
        })
        return newArray
      } else {
        // 数组字符串
        const newArray = [];
        obj.forEach((item) => {
          newArray.push(thinkHelper.camelCase(item))
        })
        return newArray
      }
    }
    if (obj && thinkHelper.isObject(obj)) {
      // 对象
      const newObj = {};
      Object.keys(obj).forEach((key, index) => {
        newObj[thinkHelper.camelCase(key)] = obj[key];
      });
      return newObj;
    }
  },
};
Object.assign(helper, thinkHelper);

module.exports = helper;

