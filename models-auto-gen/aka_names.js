/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aka_names', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_person: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    aka_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    tableName: 'aka_names',
  });
};
