const path = require('path');

module.exports = {
  // Definir la ruta de entrada a tu archivo JS principal
  entry: './www/js/index.js', // Asegúrate de que esta ruta apunte al archivo principal que usa Firebase

  // Definir la salida: el archivo empaquetado generado por Webpack
  output: {
    filename: 'bundle.js', // Este será el archivo generado por Webpack
    path: path.resolve(__dirname, 'www/js'), // La carpeta de salida donde se generará el archivo bundle.js
  },

  // Configuración del servidor de desarrollo
  devServer: {
    contentBase: path.join(__dirname, 'www'), // La carpeta base donde se sirven los archivos
    compress: true,
    port: 8000,
  },

  // Configuración de los módulos
  module: {
    rules: [
      {
        test: /\.js$/, // Solo procesamos archivos JS
        exclude: /node_modules/, // Excluir node_modules
        use: {
          loader: 'babel-loader', // Usamos Babel para transpilar el código JS
        },
      },
    ],
  },

  mode: 'development', // Modo de desarrollo
};
