module.exports = {
  siteTitle:'Сервис продвижения в соцсетях', // <title>
  manifestName: 'newage',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-newage/`, // This path is subpath of your hosting https://domain/portfolio
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/#',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/#',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/#',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://facebook.com/#',
    },
  ],
};
