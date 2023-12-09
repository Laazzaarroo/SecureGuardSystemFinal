import { createRouter, createWebHistory } from 'vue-router'
import ProductsTable from '@/components/product_table.vue';

const routes = [
  { path: '/', component: () => import('../views/admin_products')},
  { path: '/dashboard', component: () => import('../views/dashboard')},
  { path: '/products', component: () => import('../views/admin_products')},
  { path: '/ticket', component: () => import('../views/admin_ticket')},
  { path: '/client', component: () => import('../views/admin_client')},
  { path: '/warranty', component: () => import('../views/admin_warranty')},
  { path: '/settings', component: () => import('../views/admin_settings')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
