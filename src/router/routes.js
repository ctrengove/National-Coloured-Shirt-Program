
const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'ball-strike', name: 'ball-strike', component: () => import('pages/BallStrike.vue') },
      { path: 'equipment', name: 'equipment', component: () => import('pages/Equipment.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
