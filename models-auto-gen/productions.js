/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productions', {
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
    com_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    pub_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '',
    },
    cover: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: '',
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
    },
    id_review: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    id_user_create_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_user_update_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'productions',
  });
};
