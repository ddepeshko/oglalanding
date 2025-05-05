
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ddepeshko/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/swiper/swiper-element-bundle.mjs": [
    {
      "path": "chunk-3CKQSPXS.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 2490, hash: '8eeb681d73e9506f5874fb97a99e4599d89a819701d624a9837cbe72cc54a0fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1067, hash: '5904d990759ae61a70a011d7efe18394da31c0210a0d4ccc94abf06acc321fd0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MSKNCTBV.css': {size: 18818, hash: '50XhhGxv+sA', text: () => import('./assets-chunks/styles-MSKNCTBV_css.mjs').then(m => m.default)}
  },
};
