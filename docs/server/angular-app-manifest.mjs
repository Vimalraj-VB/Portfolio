
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
    'index.csr.html': {size: 5738, hash: '94ce29bc12786b7a830287c7568a9a089ab1caf6fd5532c07578c1f14243e9cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1472, hash: '8bcc3496ca66dfe8ee34f0087736f256884ac91aa07ce70fe5ca655f1bd03bbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83159, hash: '02e27f28eca60c652b851e232424e66a41bacad108f88ef2381d7b23ca1b47d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RZS2VWZP.css': {size: 342132, hash: 'KGeiFVzwt4M', text: () => import('./assets-chunks/styles-RZS2VWZP_css.mjs').then(m => m.default)}
  },
};
