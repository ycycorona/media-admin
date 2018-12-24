/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    nick_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_user_create_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_user_update_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'users'
  });
};
