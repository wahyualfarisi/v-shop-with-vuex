import { createStore } from 'vuex';
import ProductModule from './product';
import CartModule from './cart';

const store = createStore({
    modules: {
        product: ProductModule,
        cart: CartModule
    },
    state(){
        return {
            isLoggedIn: false
        }
    },
    getters: {
        userIsLogin(state){
            return state.isLoggedIn
        }
    },
    mutations: {
        setIsLogin(state){
            state.isLoggedIn = true
        },
        setIsLogout(state){
            state.isLoggedIn = false
        }
    },
    actions: {
        setIsLogin(context){
            context.commit('setIsLogin');
        },
        setLogout(context){
            context.commit('setIsLogout')
        }
    }
})

export default store;