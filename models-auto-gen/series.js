/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('series', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_pro: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    series: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'series'
  });
};
