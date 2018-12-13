'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Sequelize = app.Sequelize
  const User = app.model.define('users', {
    id: {
      type: INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: STRING(50),
      allowNull: false,
      unique: true
    },
    avatar: {
      type: STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    nick_name: {
      type: STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    create_time: {
      type: DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_time: {
      type: DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_user_create_by: {
      type: INTEGER(11),
      allowNull: false
    },
    id_user_update_by: {
      type: INTEGER(11),
      allowNull: false
    },
    status: {
      type: INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  })

  return User;
};
