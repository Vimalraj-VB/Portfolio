
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
    'index.csr.html': {size: 5738, hash: '069704a8549d883b8a400d32616aa4b45a9fa15082a0f6b4b9d899d1111e2301', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1472, hash: '05e3b5722c7f743c84f8547253da70f4691ff7c2455a3c71dff298f638ef78eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83160, hash: '69c19f7b81db0092711f9d0e211db809b0173fa40d51cdd7b34539eb0e3f2d9c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RZS2VWZP.css': {size: 342132, hash: 'KGeiFVzwt4M', text: () => import('./assets-chunks/styles-RZS2VWZP_css.mjs').then(m => m.default)}
  },
};
