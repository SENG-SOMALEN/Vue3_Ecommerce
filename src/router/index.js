// === pages import
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue';
import Wishlist from '../pages/Wishlist.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';

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
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/cart", 
        name: "Cart",
        component: Cart
    },
    {
        path: "/wishlist",
        name: "Wishlist",
        component: Wishlist
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