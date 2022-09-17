'use strict';

const Comments = (sequelize, DataTypes) => sequelize.define('commentss', {
    comments: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postID: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
})

module.exports = Comments;