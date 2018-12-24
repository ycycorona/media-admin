/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zmeta_users_roles', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    user_role_text: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'zmeta_users_roles'
  });
};
