'use strict';

module.exports = app => {
  const {STRING, INTEGER, DATE} = app.Sequelize;
  const UserAuth = app.model.define('user_auths', {
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
    },
    {
      tableName: 'user_auths'
    })

  return UserAuth;
};
