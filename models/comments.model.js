'use strict';

const Comments = (sequelize, DataTypes) => sequelize.define('commentv2', {
    comments: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_users:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
})

module.exports = Comments;