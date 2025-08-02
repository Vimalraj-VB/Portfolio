
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5738, hash: 'fb454a16a6d5215e554fda4907a26a5f4b021aecd1d679bb5a2dec0fa910bee7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1472, hash: '83b1f241c85460b10ad7193660217e4321d5acd1838a61665a22e0f453cfed3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83121, hash: 'c97cb635396633bd22b90d435bd888fba8e708112c7eff80d61d2e9fc3c36311', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RZS2VWZP.css': {size: 342132, hash: 'KGeiFVzwt4M', text: () => import('./assets-chunks/styles-RZS2VWZP_css.mjs').then(m => m.default)}
  },
};
