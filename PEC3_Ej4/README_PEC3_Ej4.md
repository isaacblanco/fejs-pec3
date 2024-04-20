# Ejercicio 4.

Se ha configurado el fichero: webpack.config.js como se requiere

```Javacript
const path = require("path");

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
  }
};
```

Detallo algunas partes y uso:

- const path = require("path"), para trabajar en node con rutas de archivos
- entry: "./src/app.ts", aquí hacemos referenica al fichero inicial de la apliación.
- devtool: "inline-source-map", genera mapas de origen y permite debugear
- rules: como procesa los fichero
- output: opciones de salida, incluyendo la ruta a donde es necesario

## Lanzar la aplicación

Para lanzar la aplicación ejecutar:

```
npm run build
```

Es la equivalencia a la llamada en el fichero package.json

```json
    "build": "webpack --mode production",
```

Donde se llama el fichero en modo de producción

Para probar la aplicación en modo desarrollo (el código es legible) que permite la depuración. Con --watch monitoreara los archivos del proyecto.

```
npm start
```

Abrir index.html en la carpeta todo-app
