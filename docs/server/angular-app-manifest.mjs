
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5737, hash: '9da72de6a7fd84b1a69e9e1cd11e9aa169b072d33fc4cc96d2c24226fcdb5279', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1471, hash: '3834dd692e12a8ac72fb2d00c61422e658a2fa04f3705d36bc2066b4cb6c8483', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83126, hash: '85f9aab355e0c79f9c40fb5db60719c9b3632be436670c90e2e3a6658dbd88e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RZS2VWZP.css': {size: 342132, hash: 'KGeiFVzwt4M', text: () => import('./assets-chunks/styles-RZS2VWZP_css.mjs').then(m => m.default)}
  },
};
