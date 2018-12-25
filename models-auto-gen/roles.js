/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'roles'
  });
};
