const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    ID: {
      type: DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
    },
    Nombre: {
        type: DataTypes.STRING(),
    },
    Dificultad: {
        type: DataTypes.INTEGER(),
        validate: {
            min: 1,
            max: 5
        }
    },
    Duracion: {
        type: DataTypes.INTEGER(),
    },
    Dificultad: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
    },
  });
};
