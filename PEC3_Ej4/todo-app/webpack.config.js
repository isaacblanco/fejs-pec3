const path = require("path");
const { devServer } = require("webpack-dev-server");

module.exports = {
  entry: "./src/app.ts", // Fichero origen
  devtool: "inline-source-map", // para debugear
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Tipo de extensión
  },
  output: {
    filename: "bundle.js", // Salida en 1 como se pide
    path: path.resolve(__dirname, "dist"), // Ruta target
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Carpeta con el archivo bundle.js
    port: 4269, // Puerto del servidor (opcional)
    open: true, // Abrir automáticamente el navegador (opcional)
  },
};
