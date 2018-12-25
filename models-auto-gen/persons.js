/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persons', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    gender: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '3'
    },
    en_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    cn_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nation: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
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
    }
  }, {
    tableName: 'persons'
  });
};
