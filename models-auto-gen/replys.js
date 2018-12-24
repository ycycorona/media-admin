/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('replys', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    id_comment: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_user_from: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    id_user_to: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'replys'
  });
};
