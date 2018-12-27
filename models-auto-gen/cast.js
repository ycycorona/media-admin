/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cast', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_person: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_role: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
    },
  }, {
    tableName: 'cast',
  });
};
