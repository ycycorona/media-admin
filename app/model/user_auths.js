'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const UserAuths = app.model.define('users', {
    id: {
      type: INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: INTEGER(11),
      allowNull: false
    },
    auth_type: {
      type: STRING(50),
      allowNull: false
    },
    identifier: {
      type: STRING(50),
      allowNull: false
    },
    token: {
      type: STRING(500),
      allowNull: false
    },
    status: {
      type: INTEGER(1),
      allowNull: false,
    }
  })

  return UserAuths;
};
