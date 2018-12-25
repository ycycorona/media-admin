/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pros_tags_r', {
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
    id_tag: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'pros_tags_r'
  });
};
