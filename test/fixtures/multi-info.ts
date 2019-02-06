// import { getMockXML } from './util'

// export default async () => {
//   const xml = await getMockXML('multi-info-response')
//   nock('https://www.opten.hu:443', { encodedQueryParams: true } as any)
//     .post('/soap/cegtar/unique/uniquemin', /<uniq:MultiInfo>/gi)
//     .reply(200, JSON.stringify(xml), [
//       'Date',
//       'Fri, 01 Feb 2019 21:06:34 GMT',
//       'Server',
//       'HTTP',
//       'Content-Length',
//       '2683',
//       'Vary',
//       'Accept-Encoding',
//       'Content-Security-Policy',
//       "default-src 'self' https://googleads.g.doubleclick.net/ https://www.google.com/ads/user-lists/ https://www.google.hu/ads/user-lists/ https://www.youtube.com/embed/ https://server.infinety.hu/;                                     img-src 'self' https://www.google-analytics.com/ https://stats.g.doubleclick.net/ https://googleads.g.doubleclick.net/ https://www.google.com/ads/ https://www.google.hu/ads/ https://maps.googleapis.com/maps/ https://csi.gstatic.com/ https://maps.gstatic.com/ https://maps.google.com/ blob: 'self' https://ad.adverticum.net/banners/ https://ssl.google-analytics.com/ https://www.facebook.com/tr/ https://ap.lijit.com/ https://u.btserve.com/ https://ad-delivery.net/ https://dmp.adform.net/dmp/profile/ https://x.bidswitch.net/ https://cm.g.doubleclick.net/ https://d5p.de17a.com/ https://sync.clickonometrics.pl/ https://ib.adnxs.com/ https://mq.wp.pl/ https://s1.adform.net/ https://adx.adform.net/ https://u.btserve.com/ data: https://www.w3.org/2000/svg/;    style-src 'self' https: 'unsafe-inline' https://maxcdn.bootstrapcdn.com/font-awesome/  https://fonts.googleapis.com/;                                     font-src 'self' https://fonts.gstatic.com/stats/ https://fonts.gstatic.com/ https://maxcdn.bootstrapcdn.com/font-awesome/ https://themes.googleusercontent.com/static/fonts/lato/; \t\t\t\t     script-src 'self' https: 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ http://www.google-analytics.com/analytics.js https://www.googleadservices.com/pagead/conversion.js https://www.google.com/recaptcha/api.js https://maps.google.com/maps/api/ https://maps.google.com/ https://maps.googleapis.com/ https://ad.adverticum.net/g3.js https://ls.hit.gemius.pl/ https://hu.hit.gemius.pl/xgemius.js https://www.googletagmanager.com https://ad.adverticum.net/g3.js https://www.googletagmanager.com/ https://connect.facebook.net/en_US/fbevents.js blob: 'self'; \t\t\t\t     connect-src 'self' https://settings.luckyorange.net/ https://track.adform.net/ wss://in.visitors.live/socket.io/ wss://visitors.live/socket.io/ https://ad.adverticum.net/;                                     child-src 'self' https://www.google.com/recaptcha/ https://googleads.g.doubleclick.net/pagead/ https://bid.g.doubleclick.net/ https://www.google.hu/ads/user-lists/ https://ls.hit.gemius.pl/ https://ad.adverticum.net/external/ https://ad.adverticum.net/banners/ https://occsz.e-cegjegyzek.hu/ https://www.youtube.com/embed/ https://www.facebook.com/tr/ https://sparbanner.kolrus.cloud/; \t\t\t\t    media-src https://sparbanner.kolrus.cloud/;",
//       'X-Content-Type-Options',
//       'nosniff',
//       'X-XSS-Protection',
//       '1; mode=block',
//       'Connection',
//       'close',
//       'Content-Type',
//       'text/xml; charset=utf-8',
//       'Set-Cookie',
//       'SERVERID=B|XFS03|XFS03; path=/'
//     ])
// }
