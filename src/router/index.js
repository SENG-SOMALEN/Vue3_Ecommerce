// === pages import
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue';

// === routes import
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
        path: "/cart", 
        name: "Cart",
        component: Cart
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