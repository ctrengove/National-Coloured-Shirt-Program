
const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'ball-strike', name: 'ball-strike', component: () => import('pages/BallStrike.vue') },
      { path: 'communication', name: 'communication', component: () => import('pages/Communication.vue') },
      { path: 'crew-signals', name: 'crew-signals', component: () => import('pages/CrewSignals.vue') },
      { path: 'equipment', name: 'equipment', component: () => import('pages/Equipment.vue') },
      { path: 'fair-foul', name: 'fair-foul', component: () => import('pages/FairFoul.vue') },
      { path: 'infield-fly', name: 'infield-fly', component: () => import('pages/InfieldFly.vue') },
      { path: 'making-decision', name: 'making-decision', component: () => import('pages/MakingDecision.vue') },
      { path: 'other-signals', name: 'other-signals', component: () => import('pages/OtherSignals.vue') },
      { path: 'out-signal', name: 'out-signal', component: () => import('pages/OutSignal.vue') },
      { path: 'safe-signal', name: 'safe-signal', component: () => import('pages/SafeSignal.vue') },
      { path: 'safe-out', name: 'safe-out', component: () => import('pages/SafeOut.vue') },
      { path: 'three-basic-prinicples', name: 'three-basic-principles', component: () => import('pages/ThreeBasicPrinciples.vue') },
      { path: 'two-umpire-system', name: 'two-umpire-system', component: () => import('pages/TwoUmpireSystem.vue') }
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
