module.exports = {
  i18n: {
    locales: ['en-US', 'pt-PT'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.pt',
        defaultLocale: 'pt-PT',
      },
    ],
  },
}