/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_auths', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    auth_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    identifier: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
  }, {
    tableName: 'user_auths',
  });
};
