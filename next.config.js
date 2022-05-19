module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}
