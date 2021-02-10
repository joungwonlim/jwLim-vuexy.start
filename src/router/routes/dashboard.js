export default [
  {
    path: '/dashboard/home',
    name: 'dashboard-home',
    component: () => import('@/views/dashboard/Home.vue'),
  },
  {
    path: '/dashboard/secondpage',
    name: 'dashboard-secondpage',
    component: () => import('@/views/dashboard/SecondPage.vue'),
  },
]
