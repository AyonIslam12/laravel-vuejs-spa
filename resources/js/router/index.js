import Vue from "vue";

import VueRouter from "vue-router";

import Home from "../components/pages/home";

import Category from '../components/pages/category/index';
import CreateCategory from '../components/pages/category/create';
import Edit from '../components/pages/category/edit';
//products
import Product from '../components/pages/product/index';
import createProduct from '../components/pages/product/create';
import editProduct from '../components/pages/product/edit';
Vue.use(VueRouter);



const routes = new VueRouter({
    mode:'history',
    linkActiveClass: 'active',
    routes:[

        {
            path:'/',
            component: Home,
            name: 'home'
        },
        //category
        {
            path:'/categories',
            component: Category,
            name: 'category-list'
        },
        {
            path:'/create-categories',
            component: CreateCategory,
            name: 'create-category'
        },
        {
            path:'/categories/edit/:id',
            component: Edit,
            name: 'edit-category'
        },
        //products
        {
            path:'/products',
            component: Product,
            name: 'product-list'
        },
        {
            path:'/product/create',
            component: createProduct,
            name: 'product-create'
        },
        {
            path:'/product/edit/:id',
            component: editProduct,
            name: 'product-edit'
        },

    ]

});

export default routes;
