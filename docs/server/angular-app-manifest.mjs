
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
    'index.csr.html': {size: 5738, hash: 'a982f5bf02a3fa3ea73e0d9061404863b211639f9fc5827547ba46905fc41e51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1472, hash: 'e16fe407e72c4abcac192555fbf621ff479569b0461d58846f4aa747eae90100', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 83160, hash: '95748e047d02e572fc06751670e4ccfc40e6a123416ccece7884804d656b2671', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RZS2VWZP.css': {size: 342132, hash: 'KGeiFVzwt4M', text: () => import('./assets-chunks/styles-RZS2VWZP_css.mjs').then(m => m.default)}
  },
};
