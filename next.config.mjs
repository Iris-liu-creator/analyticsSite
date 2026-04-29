/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/analysis/360-degree-metrics-diagosis-for-ps-leaders",
        destination: "/analysis/360-degree-metrics-diagnosis-for-ps-leaders",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
