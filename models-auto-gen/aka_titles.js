/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aka_titles', {
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
    aka_title: {
      type: DataTypes.STRING(1024),
      allowNull: false
    }
  }, {
    tableName: 'aka_titles'
  });
};
