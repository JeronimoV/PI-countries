const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID: {
      type: DataTypes.INTEGER(3),
      autoIncrement: true,
      primaryKey: true,
      validate: {
        is: /^[a-z]{0,10}$/
    }
    },
    Nombre: {
      type: DataTypes.STRING(),
    },
    Imagen: {
      type: DataTypes.STRING(),
    },
    Continente: {
      type: DataTypes.STRING(),
    },
    Capital: {
      type: DataTypes.STRING(),
    },
    Subregion: {
      type: DataTypes.STRING(),
    },
    Area: {
      type: DataTypes.FLOAT(),
    },
    Poblacion: {
      type: DataTypes.STRING(),
    },
  });
};
