module.exports = {
  reactStrictMode: true,
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
