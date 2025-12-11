
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PortFolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/PortFolio"
  },
  {
    "renderMode": 2,
    "route": "/PortFolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/PortFolio/technologies"
  },
  {
    "renderMode": 2,
    "route": "/PortFolio/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 862, hash: '99450c364efbcea1a8b23f37b26499a086b4a17f1f84cd26216d43cc8f294efd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 957, hash: '8d0dc6b283ffc10cfe49da2f1a1fbf4cd94f25b5b9fe2d16d7abeb026f6e41a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 29650, hash: 'f9572f0648d6ec22837d39c3d678e21f00c9fd2ec054a9a15da3d8ba85425f33', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29650, hash: 'f9572f0648d6ec22837d39c3d678e21f00c9fd2ec054a9a15da3d8ba85425f33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29650, hash: 'f9572f0648d6ec22837d39c3d678e21f00c9fd2ec054a9a15da3d8ba85425f33', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 29650, hash: 'f9572f0648d6ec22837d39c3d678e21f00c9fd2ec054a9a15da3d8ba85425f33', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-2MZBH2I3.css': {size: 1244, hash: 'm8htof5OA6M', text: () => import('./assets-chunks/styles-2MZBH2I3_css.mjs').then(m => m.default)}
  },
};
