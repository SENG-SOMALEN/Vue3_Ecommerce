// === pages import
import Shop from '../pages/Shop.vue'

import Home from '../pages/Home.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import { createRouter, createWebHistory } from 'vue-router';

// === routs path like
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home 
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail
    }
];

// === create rounter
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;