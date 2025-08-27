
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/welcome",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/movies"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 444, hash: 'e4007fc8fc4c5fdd74c8831cac0dc9001d3e8931dac939d675158bbfc3529f5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '7625f2884ced8c570977d132dd6857fa42adb305b3aaffb56d8fa3b7e9a99128', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 26123, hash: '94c786dcd60801ea108a98fed27487bf585e36ac1db49e2d4e46f852acf67812', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'movies/index.html': {size: 996, hash: 'e84fe08fdbb63cf5c6ffe07c1ce5900d76a86edee6c08715ff0329091fff3337', text: () => import('./assets-chunks/movies_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
