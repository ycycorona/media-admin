/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    id_pro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
  }, {
    tableName: 'reviews',
  });
};
