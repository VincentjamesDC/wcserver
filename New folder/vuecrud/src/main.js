import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import NProgress from 'nprogress';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;


import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent.vue';

const routes = [
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'index',
        path: '/index',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit',
        component: EditComponent
    }
];
const router = new VueRouter({mode: 'history', routes: routes});

router.beforeResolve((to, from, next)=> {
    if (to.name){
        NProgress.start()
    }
    next()
});
router.afterEach(() => {
    NProgress.done()
});

new Vue({render: h => h(App),
    router
}).$mount('#app')

