
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/technologies"
  },
  {
    "renderMode": 2,
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 852, hash: '7e352c2c325dadd706a1620fafaf6a87e1e455c63b07a8b5d1aaa4c99e20565f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: '8bffd34a9e5d926a88d40db09f4d99c0b0005a744399fad3bf484250c99bae45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 29640, hash: 'b6736d65f6b786539374fd9a774a6f2a32a1bd3a9b276db5e18586688618775c', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29640, hash: 'b6736d65f6b786539374fd9a774a6f2a32a1bd3a9b276db5e18586688618775c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 29640, hash: 'b6736d65f6b786539374fd9a774a6f2a32a1bd3a9b276db5e18586688618775c', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29640, hash: 'b6736d65f6b786539374fd9a774a6f2a32a1bd3a9b276db5e18586688618775c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-2MZBH2I3.css': {size: 1244, hash: 'm8htof5OA6M', text: () => import('./assets-chunks/styles-2MZBH2I3_css.mjs').then(m => m.default)}
  },
};
