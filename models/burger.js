module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
      timestamps: false
    });
  return Food;
};