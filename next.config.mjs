import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});

export default withNextra({
  i18n: {
    locales: ['en', 'cn'],
    defaultLocale: 'en',
  },
  redirects: () => [
    {
      source: '/',
      destination: `/en`,
      permanent: true,
    },
  ],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '"res.cloudinary.com"',
      },
      {
        protocol: 'https',
        hostname: '"assets.vercel.com"',
      },
      {
        protocol: "https",
        hostname: "go-chi.io"
      },
      {
        protocol: "https",
        hostname: "echo.labstack.com"
      },
      {
        protocol: "https",
        hostname: "api.microlink.io"
      }
    ],
  },
});
