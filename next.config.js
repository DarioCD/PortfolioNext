const nextConfig = {
  experimental: {
    appDir: true
  },
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "dist",
  reactStrictMode: true,
  reactStrictMode: true,
  images: { unoptimized: true },

  webpack: (config, { isServer }) => {
    // Agregar una regla para manejar archivos PDF
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Puedes ajustar el patrón de nombre de archivo si es necesario
            publicPath: '/_next/static/files', // Ruta donde se almacenarán los archivos
            outputPath: 'static/files', // Ruta en el directorio de construcción
            emitFile: isServer ? false : true, // No emitir archivos al servidor
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
